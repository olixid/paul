"use clients";
import React from "react";
import { ButtonIcon, ButtonVote } from "./Button";
import { ArrowLeft, ArrowRight, Share } from "lucide-react";
import StatDetaillees from "./StatDetaillees";
import Context from "./Context";

const Stats = ({
  handleClick,
  printInfo,
  context,
}: {
  handleClick: Function;
  printInfo: Function;
  context: Boolean;
}) => {
  return (
    <div className="fixed inset-0 z-40 bg-black/80 ">
      <div className=" flex flex-row justify-around  ">
        <div className="flex flex-col sm:w-1/2 sm:min-w-[650px] w-fit sm:h-auto sm:max-h-[90vh] h-screen  sm:rounded-3xl rounded-b-3xl mx-auto sm:mt-10   bg-neutral-200 dark:bg-neutral-900 border text-black dark:text-white overflow-auto touch-auto">
          <div className="flex flex-row bg-neutral-300 dark:bg-neutral-900 p-3 gap-2 border-b-2 border-neutral-400 justify-between sm:rounded-t-3xl">
            <div className="flex  my-auto">
              <ArrowLeft
                className="ml-4"
                onClick={
                  context
                    ? () => (handleClick(), printInfo())
                    : () => handleClick()
                }
              />
            </div>
            <div className="flex flex-col justify-self-center -ml-10 gap-1">
              <p className=" flex justify-center font-semibold">
                Statistiques détaillées
              </p>
              <p className="flex justify-center text-[12px] text-neutral-700">
                31/10/2024
              </p>
            </div>
            <div />
          </div>
          <div className="static p-4 ">
            <StatDetaillees
              question="Faut-il rendre le nutriscore obligatoire en France ?"
              theme="Société"
              printInfo={() => printInfo()}
              context={context}
            />
          </div>
        </div>

        {context && (
          <div className="flex sm:w-1/3 sm:min-w-96 w-fit sm:max-h-[450px] h-[90vh]  rounded-3xl mx-auto    bg-neutral-200 dark:bg-neutral-900 border text-black dark:text-white bg-black/80 overflow-auto touch-auto justify-center sm:my-auto">
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
        )}
      </div>
    </div>
  );
};

export default Stats;
