import React from "react";
import Question from "./Question";
import { ThemeToggle } from "./themeToggle";
import { BookOpen, Plus, Share, ThumbsDown, ThumbsUp } from "lucide-react";

const BlockMenu = ({
  children,
  pour,
  contre,
}: {
  children: React.ReactNode;
  pour?: string;
  contre?: string;
}) => {
  return (
    <>
      <div className="flex flex-col  border dark:border-transparent border-neutral-500 bg-neutral-200 rounded-3xl p-5  tel:w-5/6 w-full h-full gap-3 dark:text-black">
        <div className="flex lg:flex-row  lg:justify-around  flex-col lg:relative gap-3">
          <div className="lg:flex-none flex lg:justify-normal justify-center">
            <Question
              question="Michel Banier doit-il avoir recours à l'article 49-3 pour faire adopter le budget ?"
              theme="Société"
              intitule="Question d'opinion"
            />
          </div>
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
        </div>
        <hr className="border-neutral-400" />
        <div className="flex flex-row justify-center">
          <Share className="size-5 my-auto" />
          <p className="mx-2 my-auto underline">Partager le sondage Paul </p>
        </div>
      </div>
    </>
  );
};

export default BlockMenu;
