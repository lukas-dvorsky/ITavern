import type { LectureHierarchy } from "generated/prisma";

type LectureHierarchyExtended = LectureHierarchy & {
  children: LectureHierarchyExtended[];
};

/**
 * Funkce pro upravu zaznamu z hierarchie lekci, prida novy zaznam children do objektu, tak aby sel zpracovat.
 * @param flatList
 * @returns Zaznamy bez parentId. Rozsirenou verzi LectureHierarchy o children.
 */
export function buildHierarchyTree(
  flatList: LectureHierarchy[],
): LectureHierarchyExtended[] {
  const map = new Map<number, LectureHierarchyExtended>();
  const roots: LectureHierarchyExtended[] = [];

  flatList.forEach((item) => {
    const node: LectureHierarchyExtended = { ...item, children: [] };
    map.set(item.id, node);
  });

  map.forEach((item) => {
    if (item.HierarchyParentId === null) {
      roots.push(item);
    } else {
      const parent = map.get(item.HierarchyParentId);
      if (parent) {
        parent.children.push(item);
      }
    }
  });

  return roots;
}
