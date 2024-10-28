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
      <div className="flex flex-col bg-stone-200 rounded-t-3xl p-5 gap-3 w-5/6 h-full ">
        <Question
          question="Michel Banier doit-il avoir recours à l'article 49-3 pour faire adopter le budget ?"
          theme="Société"
          intitulé="Question d'opinion"
        />
        <div className="flex flex-row mx-10  ">
          <BookOpen className=" mx-2 my-auto" />
          <h1 className="font-bold text-xl my-auto ">Contexte</h1>
        </div>
        <div className="flex flex-col gap-4">
          <p className="mx-4">{children} </p>
          <hr className="border-stone-400" />
          <div className="flex flex-rox mx-4">
            <ThumbsUp className="my-auto" />
            <h2 className="my-auto mx-2 font-semibold">
              Ils se sont prononcés POUR
            </h2>
          </div>
          <p className="mx-4">{pour}</p>
          <hr className="border-stone-400" />
          <div className="flex flex-rox mx-4">
            <ThumbsDown className="my-auto " />
            <h2 className="my-auto mx-2 font-semibold">
              Ils se sont prononcés CONTRE
            </h2>
          </div>
          <p className="mx-4">{contre}</p>
          <hr className="border-stone-400" />
          <div className="flex flex-row justify-center">
            <Share className="size-5 my-auto" />
            <p className="mx-2 my-auto underline">Partager le sondage Paul </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockMenu;
