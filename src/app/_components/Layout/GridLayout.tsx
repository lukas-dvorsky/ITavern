import React from "react";

// Rozšíříme props o všechny standardní div atributy
interface GridLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const GridLayout: React.FC<GridLayoutProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`grid w-full gap-4 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GridLayout;
