"use client";

import React from "react";

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-none flex-row gap-1 w-fit bg-black  rounded-full py-2 px-3 text-white  ">
      <span className=" relative flex h-2 w-2 my-auto rounded-full mx-1  bg-white "></span>
      <span className="my-auto text-xs font-semibold">{children}</span>
    </div>
  );
};

export default Label;
