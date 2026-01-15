import React, { useEffect, useState } from "react";
import LectureChildStatisticsFilter from "./LectureChildStatisticsFilter";
import LectureChildren from "./LectureChildren";
import GridLayout from "../../Layout/GridLayout";

// Zase zkurvena hierarchie

// Cilem je zobrazit podurovne dane lekce s moznosti zobrazeni jejich podurovni
// Filtrace - Vyhledavani, show completed, uncompleted, where completetion < x % ???, vse aktivni naraz
export interface ILectureFilterParams extends React.HTMLAttributes<HTMLDivElement> {
  showCompleted: boolean;
  showUncompleted: boolean;
  searchPrompt: string;
}

interface ILectureChildStatistics {
  lectureId: number;
}

function LectureChildStatistics(props: ILectureChildStatistics) {
  const [activeFilters, setActiveFilters] = useState<ILectureFilterParams>({
    showCompleted: false,
    showUncompleted: false,
    searchPrompt: "",
  });

  return (
    <GridLayout className="flex">
      <LectureChildStatisticsFilter
        className="col-span-12"
        state={activeFilters}
        setState={setActiveFilters}
      />
      <div className="custom-scrollbar col-span-11 mt-12 max-h-96 overflow-y-scroll">
        <LectureChildren
          lectureId={props.lectureId}
          turnoffAnimation={true}
          className="origin-top-left scale-75"
          filters={activeFilters}
        />
      </div>
    </GridLayout>
  );
}

export default LectureChildStatistics;
