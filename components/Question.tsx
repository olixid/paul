import React from "react";
import { ButtonIcon, ButtonVote } from "./Button";
import Label from "./Label";
import { Share } from "lucide-react";

const Question = ({ questionDuJour }: { questionDuJour: string }) => {
  return (
    <div className="flex flex-col max-w-96 mx-auto rounded-2xl p-6 shadow-lg gap-3 border border-black m-7">
      <div className="flex flex-row justify-between">
        <div className="my-auto uppercase text-sm bg-transparent font-semibold">
          Question d'opinion
        </div>
        <ButtonIcon className="p-[10px]">
          <Share />
        </ButtonIcon>
      </div>

      <hr className="border-stone-400" />
      <Label>Société</Label>
      <div className="flex flex-col items-center gap-3">
        <div className="text-2xl leading-8">{questionDuJour}</div>
        <div className=" flex flex-col sm:flex-row w-full gap-3">
          <ButtonVote className="border-yellow-500 ">Oui</ButtonVote>
          <ButtonVote className="border-purple-800 ">Non</ButtonVote>
        </div>
        <ButtonVote>Je m'abstiens</ButtonVote>
      </div>
    </div>
  );
};

export default Question;
