import React from "react";

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-fit bg-black dark:bg-white rounded-full px-2 text-white dark:text-black ">
      {children}
    </div>
  );
};

export default Label;
