"use client";

import React from "react";
import Label from "./Label";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

const ResPrecedent = ({
  handleClick,
  children,
  date,
}: {
  handleClick: Function;
  children: React.ReactNode;
  date: string;
}) => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-3 m-2">
          <div className="flex flex-rox space-x-3">
            <Label
              symbol="dot"
              className="bg-transparent text-black border-black dark:text-white dark:border-white"
              color="dark:bg-white bg-black"
            >
              Société
            </Label>
            <Label
              symbol="speaker"
              className="bg-neutral-100 border-neutral-400 text-black"
            >
              Question d'opinion
            </Label>
          </div>
          <p>{children}</p>
          <p className="text-neutral-500 text-[12px]">{date}</p>
        </div>
        <ChevronRight className="flex my-auto" onClick={() => handleClick()} />
      </div>
      <hr className="border-stone-400" />
    </>
  );
};

export default ResPrecedent;
