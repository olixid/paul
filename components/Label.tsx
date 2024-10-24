import React from "react";

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row gap-1 w-fit bg-black dark:bg-white rounded-full px-2 text-white dark:text-black ">
      <span className="relative flex h-3 w-3 my-auto">
        <span className="relative inline-flex rounded-full h-3 w-3 dark:bg-black bg-white "></span>
      </span>
      <span className="my-auto">{children}</span>
    </div>
  );
};

export default Label;
