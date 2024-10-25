import React from "react";
import Question from "./Question";
import { ThemeToggle } from "./themeToggle";
import { BookOpen } from "lucide-react";

const BlockMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col bg-stone-200 rounded-t-3xl m-14 p-5 gap-3 w-5/6 h-full ">
        <ThemeToggle />
        <Question questionDuJour="Michel Banier doit-il avoir recours à l'article 49-3 pour faire adopter le budget ?" />
        <div className="relative my-auto flex flex-row mx-10  ">
          <BookOpen className="mx-2" />
          <h1 className="font-bold text-xl ">Contexte</h1>
        </div>

        <p className="mx-4">{children} </p>
      </div>
    </>
  );
};

export default BlockMenu;
