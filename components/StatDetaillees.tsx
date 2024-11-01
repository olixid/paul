"use client";

import { ButtonVote } from "@/components/Button";
import Label from "@/components/Label";
import React from "react";
import RadialChart from "@/components/RadialChart";
import { ExternalLink } from "lucide-react";

const StatDetaillees = ({
  question,
  theme,
}: {
  question?: string;
  theme?: string;
}) => {
  return (
    <>
      <div className="flex flex-col gap-3 ">
        <div className=" flex justify-center">
          <Label symbol="dot">Developpement durable{theme}</Label>
        </div>
        <p>{question}</p>
        <ButtonVote>En savoir plus sur la question</ButtonVote>

        <div>
          <p>Resultats autour de vous*</p>
          <RadialChart />
        </div>
        <div>
          <p>Les citoyens*</p>
          <RadialChart />
        </div>
        <p>
          *Ces données sont basées sur les votes des utilisateurs de Paul,
          partagez l'app pour nous aider à faire grandir l'échantillon de
          personnes !
        </p>
        <ButtonVote>
          <div className="flex flex-row space-x-2">
            <p className="flex my-auto tracking-normal">
              Partagez l'application
            </p>
            <ExternalLink className="flex size-4 my-auto" />
          </div>
        </ButtonVote>
      </div>
    </>
  );
};

export default StatDetaillees;
