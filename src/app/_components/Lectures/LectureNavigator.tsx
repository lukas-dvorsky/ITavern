import React from "react";
import { requireLoggedIn } from "~/server/utils/auth";
import { api } from "~/trpc/server";
import LectureNavigatorLecture from "./LectureNavigatorLecture";
import type { LectureHierarchy, Roles } from "generated/prisma";

interface LectureNavigatorProps {
  userRole: Roles;
  userId: string;
}

type LectureHierarchyExtended = LectureHierarchy & {
  children: LectureHierarchyExtended[];
};

const isItemVisible = (
  item: LectureHierarchy,
  userId: string,
  userRole: Roles,
) => {
  // Viditelná, pokud je veřejná NEBO je soukromá A patří uživateli
  return (
    item.isPublic === true ||
    (item.isPublic === false && userId === item.createdById)
  );
};

// Všechny globální proměnné (jako 'visibleMap') by měly být uvnitř funkce
// nebo předány jako argumenty, aby se předešlo side effectům.
// Zde je zrušena, nahrazena lokální mapou.

async function LectureNavigator(props: LectureNavigatorProps) {
  await requireLoggedIn();

  const lectures = await api.lectures.getLectureHierarchiesBuilded();

  function buildHierarchyTree(
    flatList: LectureHierarchy[],
  ): LectureHierarchyExtended[] {
    const allNodesMap = new Map<number, LectureHierarchyExtended>();
    const roots: LectureHierarchyExtended[] = [];

    // =================================================================
    // 1. PRŮCHOD: Mapování a Filtrace (Vytvoření viditelných uzlů)
    // =================================================================

    // Tuto mapu použijeme pro sestavení hierarchie a obsahuje pouze viditelné uzly.
    const visibleNodesMap = new Map<number, LectureHierarchyExtended>();

    flatList.forEach((item) => {
      // Vytvoření zkopírovaného uzlu s polem children
      const node: LectureHierarchyExtended = { ...item, children: [] };
      allNodesMap.set(item.id, node);

      if (isItemVisible(item, props.userId, props.userRole)) {
        visibleNodesMap.set(item.id, node);
      }
    });

    // =================================================================
    // 2. PRŮCHOD: Odpojení od neviditelných rodičů
    // =================================================================

    visibleNodesMap.forEach((item) => {
      let currentParentId = item.HierarchyParentId;

      // Pokud je položka dítětem
      if (currentParentId !== null) {
        let parent = allNodesMap.get(currentParentId);

        // Cyklíme nahoru v hierarchii, dokud nenajdeme VIDITELNÉHO předka
        // nebo dokud nedojdeme k rootu (null).
        while (parent && !visibleNodesMap.has(parent.id)) {
          // Rodič NENÍ viditelný, jdeme o úroveň výš.
          currentParentId = parent.HierarchyParentId;

          if (currentParentId === null) {
            // Došli jsme na root, neviditelná cesta končí
            parent = undefined;
          } else {
            // Jdeme k dalšímu předkovi
            parent = allNodesMap.get(currentParentId);
          }
        }

        // 🚀 KLÍČOVÁ ZMĚNA: Nastavení nového, nejbližšího VIDITELNÉHO rodiče
        // Pokud jsme našli viditelného předka (parent), nastavíme ho jako nového rodiče.
        // Jinak (parent je undefined nebo jsme došli na null), nastavíme parentId na null.
        item.HierarchyParentId = parent ? parent.id : null;
      }
    });

    // =================================================================
    // 3. PRŮCHOD: Sestavení finální hierarchie z upravené visibleNodesMap
    // =================================================================

    visibleNodesMap.forEach((item) => {
      if (item.HierarchyParentId === null) {
        // Nyní se jedná o skutečný kořen (root, nebo povýšený uzel)
        roots.push(item);
      } else {
        // Item má viditelného rodiče, získáme ho z visibleNodesMap
        const parent = visibleNodesMap.get(item.HierarchyParentId);

        // Rodič MUSÍ v tuto chvíli existovat, protože jsme HierarchyParentId
        // nastavili pouze na ID existujícího uzlu z visibleNodesMap (nebo null).
        if (parent) {
          parent.children.push(item);
        } else {
          // Mělo by se stát jen teoreticky (ochrana), pokud by předchozí logika selhala.
          roots.push(item);
        }
      }
    });

    return roots;
  }

  const buildedHierarchies = buildHierarchyTree(lectures);

  // ... (renderLectureTree a return JSX zůstávají stejné) ...

  const renderLectureTree = (nodes: typeof buildedHierarchies) => {
    return nodes.map((lecture) => (
      <LectureNavigatorLecture
        userId={props.userId}
        key={lecture.id}
        id={lecture.id}
        name={lecture.name}
        userRole={props.userRole}
        isPublic={lecture.isPublic}
      >
        {lecture.children && lecture.children.length > 0
          ? renderLectureTree(lecture.children)
          : null}
      </LectureNavigatorLecture>
    ));
  };

  return (
    <div className="bg-background-card dark:bg-background-dark-card dark:text-text-dark-mode flex w-full flex-col justify-center overflow-hidden rounded-md text-2xl text-black">
      {renderLectureTree(buildedHierarchies)}
    </div>
  );
}

export default LectureNavigator;
