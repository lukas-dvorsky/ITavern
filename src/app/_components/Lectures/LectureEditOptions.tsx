"use client";

import React from "react";

// interface LectureEditOptionsProps {
//   id: string;
//   markdown: string;
// }

function LectureEditOptions(/* props: LectureEditOptionsProps */) {
  // const updateMarkdown = api.lectures.udpateMarkdownBlock.useMutation();

  return (
    <div>
      <button
      // onClick={() => {
      //   updateMarkdown.mutate({
      //     name: "LUKE TO NEOPRAVIL HAh",
      //     userId: "cmiarj8uv0000vp7c11fpzoy1",
      //     id: Number(props.id),
      //     content: props.markdown,
      //   });
      // }}
      >
        Update
      </button>
    </div>
  );
}

export default LectureEditOptions;
