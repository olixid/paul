import React from "react";
import { ButtonIcon, ButtonVote } from "./Button";
import Label from "./Label";
import { ArrowRight, Share, Vote } from "lucide-react";
import { dot } from "node:test/reporters";
import { ProgressBar } from "@/components/ProgressBar";

const Question = ({
  question,
  theme,
  intitule,
  Answer = false,
}: {
  question: string;
  theme: string;
  intitule: "Question d'opinion" | "Hier";
  Answer?: boolean;
}) => {
  return (
    <div className="flex flex-col max-w-96 mx-auto rounded-2xl p-6 shadow-lg gap-3 border border-black m-7">
      <div className="flex flex-row justify-between">
        {intitule === "Question d'opinion" ? (
          <Label
            symbol="speaker"
            className="my-auto uppercase text-sm text-black  font-semibold bg-transparent border-transparent"
          >
            {intitule}
          </Label>
        ) : (
          <Label className="my-auto uppercase text-sm text-black  font-semibold bg-transparent border-transparent">
            {intitule}
          </Label>
        )}

        <ButtonIcon className="p-[10px]">
          {intitule === "Question d'opinion" ? <Share /> : <ArrowRight />}
        </ButtonIcon>
      </div>

      <hr className="border-stone-400" />
      <Label symbol="dot">{theme}</Label>
      <div className="flex flex-col items-center gap-4">
        <div className="text-2xl leading-8">{question}</div>
        {intitule === "Question d'opinion" ? (
          <Choice />
        ) : intitule === "Hier" ? (
          <Result pourcentage={33} />
        ) : (
          Answer === true && <Send />
        )}
      </div>
    </div>
  );
};

const Choice = () => {
  return (
    <>
      <div className=" flex flex-col sm:flex-row w-full gap-3">
        <ButtonVote className="border-yellow-500 ">Oui</ButtonVote>
        <ButtonVote className="border-purple-800 ">Non</ButtonVote>
      </div>
      <ButtonVote>Je m'abstiens</ButtonVote>
    </>
  );
};

const Result = ({ pourcentage }: { pourcentage: number }) => {
  return (
    <>
      <div className=" flex flex-col sm:flex-row w-full gap-3 justify-between x-3">
        <div className="flex flex-row">
          <Vote className=" my-auto size-5" />
          <p className=" mx-1 my-auto ">Autour de vous</p>
        </div>
        <Label>Non {pourcentage}%</Label>
      </div>
      <ProgressBar value={pourcentage} />
    </>
  );
};

const Send = () => {
  return (
    <>
      <div className=" flex flex-col  ">
        <p className="">Votre vote a été pris en compte !</p>
        <p className="text-sm">Rendez-vous demain pour les resultats.</p>
      </div>
    </>
  );
};

export default Question;
