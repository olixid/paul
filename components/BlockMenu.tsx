import React from "react";
import Question from "./Question";
import { ThemeToggle } from "./themeToggle";
import { BookOpen } from "lucide-react";

const BlockMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col dark:bg-stone-800 bg-stone-200 rounded-3xl p-5 gap-3 w-full lg:w-5/6 h-screen ">
        <ThemeToggle />
        <Question questionDuJour="Michel Banier doit-il avoir recours à l'article 49-3 pour faire adopter le budget ?" />
        <div className="relative flex flex-row mx-10">
          <BookOpen className="mx-2 my-auto" />
          <h1 className="font-bold my-auto text-xl ">Contexte</h1>
        </div>

        <p className="mx-4">{children} </p>
      </div>
    </>
  );
};

export default BlockMenu;
