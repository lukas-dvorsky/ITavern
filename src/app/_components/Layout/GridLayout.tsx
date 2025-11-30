import React from "react";

interface GridLayoutProps {
  children?: React.ReactNode;
}

function GridLayout(props: GridLayoutProps) {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
      {props.children}
    </div>
  );
}

export default GridLayout;
