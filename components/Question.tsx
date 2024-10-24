import React from "react";
import { ButtonVote } from "./Button";
import Label from "./Label";

const Question = ({ questionDuJour }: { questionDuJour: string }) => {
  return (
    <div className="max-w-md mx-auto rounded-2xl p-6 shadow-lg gap-3 border border-black">
      <Label>Société</Label>
      <div className="flex flex-col items-center gap-3">
        <div className="text-2xl font-thin leading-8">{questionDuJour}</div>
        <div className=" flex flex-row w-full gap-3">
          <ButtonVote className="border-yellow-500 ">Oui</ButtonVote>
          <ButtonVote className="border-purple-500 ">Non</ButtonVote>
        </div>
        <ButtonVote>Je m'abstiens</ButtonVote>
      </div>
    </div>
  );
};

export default Question;
