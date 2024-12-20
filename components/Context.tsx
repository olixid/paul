import { BookOpen, Share, ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";

const Context = ({
  children,
  pour,
  contre,
}: {
  children: React.ReactNode;
  pour?: string;
  contre?: string;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="lg:w-full lg:mt-0  mt-2 lg:pt-4  lg:pr-4 ">
        <div className="flex flex-row  mx-5 ">
          <BookOpen className=" mx-2 my-auto" />
          <h1 className="font-bold text-xl my-auto  ">Contexte</h1>
        </div>
        <div className="flex flex-col gap-4 pt-3">
          <p className="mx-3">{children} </p>
          <hr className="border-neutral-400" />
          <div className="flex flex-rox mx-4">
            <ThumbsUp className="my-auto shadow-lg  shadow-amber-200 bg-gradient-to-t from-amber-100 rounded-md" />
            <h2 className="my-auto mx-2 font-semibold">
              Ils se sont prononcés POUR
            </h2>
          </div>
          <p className="mx-4">{pour}</p>
          <hr className="border-neutral-400" />
          <div className="flex flex-rox mx-4">
            <ThumbsDown className="my-auto shadow-lg shadow-indigo-200 bg-gradient-to-t from-indigo-200  rounded-md" />
            <h2 className="my-auto mx-2 font-semibold">
              Ils se sont prononcés CONTRE
            </h2>
          </div>
          <p className="mx-4">{contre}</p>
        </div>
      </div>
      <hr className="border-neutral-400" />
      <div className="flex flex-row justify-center">
        <Share className="size-5 my-auto" />
        <p className="mx-2 my-auto underline">Partager le sondage Paul </p>
      </div>
    </div>
  );
};

export default Context;
