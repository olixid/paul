import React from "react";
import Question from "./Question";
import { ThemeToggle } from "./themeToggle";
import { BookOpen, Plus, Share, ThumbsDown, ThumbsUp } from "lucide-react";
import Context from "./Context";

const BlockMenu = () => {
  return (
    <>
      <div className="flex flex-col  border dark:border-transparent border-neutral-500 bg-neutral-200 tel:rounded-3xl rounded-t-3xl  tel:p-5 p-0 pb-4 tel:mb-0 -mb-5 md:w-5/6 tel:w-[90%] w-full h-full gap-3 dark:bg-neutral-700">
        <div className="flex lg:flex-row  lg:justify-around  flex-col lg:relative gap-3">
          <div className="lg:flex-none flex lg:float-left justify-center">
            <Question
              question="Michel Banier doit-il avoir recours à l'article 49-3 pour faire adopter le budget ?"
              theme="Société"
              intitule="Question d'opinion"
            />
          </div>
          <Context
            pour="ckjdhcjhsghsgdy  /nhgdjsdgcbjhsgdyzejgjsd
          dfsdfsdffgreqfrqgrqgtggdfvg(-(z(st"
            contre="bhjcgysdgbnfbsdjgcsbdnbrze hgdhjgcbds fejhchbeh,gdjhcbbhjcgysdgbnfbsdjgcsbdnbrze hgdhjgcbds fejhchbeh,gdjhcbbhjcgysdgbnfbsdjgcsbdnbrze hgdhjgcbds fejhchbeh,gdjhcbbhjcgysdgbnfbsdjgcsbdnbrze hgdhjgcbds fejhchbeh,gdjhcbbhjcgysdgbnfbsdjgcsbdnbrze hgdhjgcbds fejhchbeh,gdjhcbbhjcgysdgbnfbsdjgcsbdnbrze hgdhjgcbds fejhchbeh,gdjhcb"
          >
            texte <br />
            hgj
            <br />
            ghf
            <br /> blabla
          </Context>
        </div>
      </div>
    </>
  );
};

export default BlockMenu;
