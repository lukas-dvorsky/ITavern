import React from "react";

interface IProgressBar extends React.HTMLAttributes<HTMLDivElement> {
  max: number;
  count: number;
}

function ProgressBar(props: IProgressBar) {
  const progress = Math.round((props.count * 100) / props.max) + "%";

  if (props.max === 0) {
    return;
  }

  return (
    <div className={`${props.className} flex items-center gap-6`}>
      <div className="dark:bg-background-dark-card h-2 w-full overflow-hidden rounded-lg">
        <div
          style={{ width: progress }}
          className={`${props.max === props.count ? "bg-amber-400" : "bg-accent"} w-1/2`}
        >
          &nbsp;
        </div>
      </div>
      <span>{progress}</span>
    </div>
  );
}

export default ProgressBar;
