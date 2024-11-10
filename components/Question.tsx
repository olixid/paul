"use client";

import React, { useEffect } from "react";
import { ButtonIcon, ButtonVote } from "./Button";
import Label from "./Label";
import { ArrowLeft, ArrowRight, SendIcon, Share, Vote } from "lucide-react";
import { dot } from "node:test/reporters";
import { ProgressBar } from "@/components/ProgressBar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import StatDetaillees from "./StatDetaillees";
import Stats from "./Stats";
import Context from "./Context";

const Question = ({
  stats = false,
  handleClick = () => {},
  question,
  theme,
  intitule,
  className,
}: {
  stats?: Boolean;
  handleClick?: Function;
  question: string;
  theme: string;
  intitule: "Question d'opinion" | "Hier";
  className?: string;
}) => {
  const [answer, setAnswer] = useState(false);
  const send = () => {
    setAnswer(true);
  };

  const [context, setContext] = useState(false);
  const printContext = () => {
    setContext((context) => !context);
  };

  const [vote, setVote] = useState({ pour: 0, contre: 0, rien: 0 });
  const Choice = () => {
    const votePour = () => {
      setVote({ ...vote, pour: vote.pour + 1 });
    };
    const voteContre = () => {
      setVote({ ...vote, contre: vote.contre + 1 });
    };
    const voteRien = () => {
      setVote({ ...vote, rien: vote.rien + 1 });
    };

    return (
      <>
        <div className=" flex flex-row w-full gap-3">
          <ButtonVote
            className="border-amber-400 "
            onClick={() => (votePour(), send())}
          >
            Oui
          </ButtonVote>
          <ButtonVote
            className="border-indigo-300 h-14"
            onClick={() => (voteContre(), send())}
          >
            Non
          </ButtonVote>
        </div>
        <ButtonVote
          className="h-14 dark:border-white"
          onClick={() => (voteRien(), send())}
        >
          Je m'abstiens
        </ButtonVote>
      </>
    );
  };

  const Result = ({
    pourcentage,
    reponse,
  }: {
    pourcentage: number;
    reponse: "Oui" | "Non";
  }) => {
    return (
      <>
        <div className=" flex flex-row sm:flex-row justify-between w-full gap-3 lg:mt-3">
          <div className="flex flex-row">
            <Vote className=" my-auto size-5" />
            <p className=" mx-1 my-auto ">Autour de vous</p>
          </div>
          <Label
            className={
              reponse === "Oui"
                ? "bg-amber-200 border-none text-black shadow-md shadow-amber-200"
                : "bg-indigo-300  border-none  text-black shadow-md shadow-indigo-300"
            }
          >
            {reponse} {pourcentage}%
          </Label>
        </div>
        <ProgressBar
          value={pourcentage}
          className={reponse === "Non" ? "bg-indigo-300 lg:my-3" : "lg:my-3"}
        />
      </>
    );
  };

  const Send = () => {
    return (
      <>
        <div className="flex flex-col gap-2 text-center bg-neutral-300 p-3 rounded-lg mt-2 dark:text-black shadow-md">
          <SendIcon className="mx-auto mt-1" />
          <div className=" flex flex-col  ">
            <p className="">Votre vote a été pris en compte !</p>
            <p className="text-[12px]">
              Rendez-vous demain pour les resultats.
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-sm lg:max-w-md lg:h-min  rounded-2xl py-4 px-6 shadow-lg lg:gap-5  gap-3 border border-black m-7 lg:mt-12 bg-neutral-50 dark:bg-neutral-900 dark:text-white dark:border-transparent",
        className
      )}
    >
      {stats && (
        <Stats
          handleClick={() => handleClick()}
          printInfo={() => printContext()}
          context={context}
        />
      )}
      <div className="flex flex-row justify-between lg:pt-2">
        {intitule === "Question d'opinion" ? (
          <Label
            symbol="speaker"
            className="my-auto uppercase  text-black dark:text-white  font-semibold bg-transparent border-transparent "
          >
            {intitule}
          </Label>
        ) : (
          <Label className="my-auto uppercase  dark:text-black text-white  font-semibold bg-transparent border-transparent ">
            {intitule}
          </Label>
        )}

        <ButtonVote
          className="p-[10px] border-neutral-300 rounded-full w-11 h-11"
          onClick={() => handleClick()}
        >
          {intitule === "Question d'opinion" ? (
            <Share className="tel:size-5 size-4  mx-auto" />
          ) : (
            <ArrowRight className="tel:size-5 size-4 mx-auto" />
          )}
        </ButtonVote>
      </div>

      <hr className="border-neutral-300" />

      {intitule === "Question d'opinion" ? (
        <Label
          symbol="dot"
          className="dark:bg-white dark:text-black dark:border-transparent"
          color="dark:bg-black"
        >
          {theme}
        </Label>
      ) : (
        <Label
          symbol="dot"
          className="bg-white text-black border-transparent dark:bg-black dark:text-white"
          color="bg-black dark:bg-white"
        >
          {theme}
        </Label>
      )}

      <div className="flex flex-col items-center gap-4">
        <div className="sm:text-2xl text-xl leading-8 ">{question}</div>
        {answer === true ? (
          <Send />
        ) : intitule === "Question d'opinion" ? (
          <Choice />
        ) : (
          intitule === "Hier" && <Result pourcentage={33} reponse="Non" />
        )}
      </div>
    </div>
  );
};

export default Question;
