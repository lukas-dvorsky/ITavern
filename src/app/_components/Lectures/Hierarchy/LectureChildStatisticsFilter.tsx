import React from "react";
import type { ILectureFilterParams } from "./LectureChildStatistics";
import ToggleButton from "../../UI/ToggleButton";
import GridLayout from "../../Layout/GridLayout";
import InputText from "../../UI/InputText";

interface ILectureChildStatisticsFilter extends React.HTMLAttributes<HTMLDivElement> {
  state: ILectureFilterParams;
  setState: React.Dispatch<React.SetStateAction<ILectureFilterParams>>;
}

function LectureChildStatisticsFilter(props: ILectureChildStatisticsFilter) {
  return (
    <GridLayout className="col-span-10 flex max-h-8 gap-8">
      <InputText
        dbKey=""
        placeholder="Hledat lekci..."
        className="col-span-6"
        onChange={(value) => {
          props.setState({
            ...props.state,
            searchPrompt: value,
          });
        }}
      />
      <ToggleButton
        className="col-span-3"
        active={props.state.showCompleted}
        actionActive={() => {
          props.setState({
            ...props.state,
            showCompleted: true,
            showUncompleted: false,
          });
        }}
        actionDisabled={() => {
          props.setState({
            ...props.state,
            showCompleted: false,
            showUncompleted: false,
          });
        }}
        title="Splněné"
      />
      <ToggleButton
        className="col-span-3"
        active={props.state.showUncompleted}
        actionActive={() => {
          props.setState({
            ...props.state,
            showCompleted: false,
            showUncompleted: true,
          });
        }}
        actionDisabled={() => {
          props.setState({
            ...props.state,
            showCompleted: false,
            showUncompleted: false,
          });
        }}
        title="Nesplněné"
      />
    </GridLayout>
  );
}

export default LectureChildStatisticsFilter;
