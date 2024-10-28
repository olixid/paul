import React from "react";
import { ButtonIcon, ButtonVote } from "./Button";
import Label from "./Label";
import { Share } from "lucide-react";

const Question = ({
  question,
  theme,
  intitulé,
}: {
  question: string;
  theme: string;
  intitulé: string;
}) => {
  return (
    <div className="flex flex-col max-w-96 mx-auto rounded-2xl p-6 shadow-lg gap-3 border border-black m-7">
      <div className="flex flex-row justify-between">
        <Label className="my-auto uppercase text-sm text-black  font-semibold bg-transparent border-transparent">
          {intitulé}
        </Label>
        <ButtonIcon className="p-[10px]">
          <Share />
        </ButtonIcon>
      </div>

      <hr className="border-stone-400" />
      <Label>{theme}</Label>
      <div className="flex flex-col items-center gap-4">
        <div className="text-2xl leading-8">{question}</div>
        <Choice />
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

const Result = () => {
  return (
    <>
      <div className=" flex flex-col sm:flex-row w-full gap-3">
        <p>Autour de vous</p>
        <Label>Non 80%</Label>
      </div>
    </>
  );
};

export default Question;
