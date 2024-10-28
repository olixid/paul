"use client";

import React from "react";
import Label from "./Label";

const ResPrecedent = ({
  children,
  date,
}: {
  children: React.ReactNode;
  date: string;
}) => {
  return (
    <>
      <div className="flex flex-col gap-3 m-2">
        <div className="flex flex-rox space-x-3">
          <Label className="bg-transparent text-black border-black">
            Société
          </Label>
          <Label className="bg-white border-neutral-300 text-black">
            Question d'opinion
          </Label>
        </div>
        <p>{children}</p>
        <p className="text-neutral-500 text-sm">{date}</p>
      </div>
      <hr className="border-stone-400" />
    </>
  );
};

export default ResPrecedent;
