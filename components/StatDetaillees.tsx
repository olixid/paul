"use client";

import { ButtonVote } from "@/components/Button";
import Label from "@/components/Label";
import React from "react";
import RadialChart from "@/components/RadialChart";
import { ExternalLink } from "lucide-react";

const StatDetaillees = ({
  question,
  theme,
  printInfo,
  context,
}: {
  question: string;
  theme: string;
  printInfo: Function;
  context: Boolean;
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-center mt-2">
          <Label
            symbol="dot"
            className="bg-neutral-900 dark:bg-neutral-300 dark:text-neutral-900"
            color="dark:bg-neutral-900"
          >
            {theme}
          </Label>
        </div>

        <p className="text-center text-xl">{question}</p>
        <ButtonVote
          className="w-64 text-center mx-auto  text-sm dark:text-neutral-600 dark:border-neutral-600 mt-2 shadow-md dark:bg-transparent bg-neutral-200 border-neutral-500 text-neutral-500 hover:font-normal hover:bg-neutral-300 dark:hover:bg-neutral-900 dark:hover:font-semibold "
          onClick={() => printInfo()}
        >
          {!context ? "En savoir plus sur la question" : "Masquer le contexte"}
        </ButtonVote>
        <div className="flex sm:flex-row flex-col gap-4 sm:gap-0 sm:justify-around">
          <div className="flex flex-col my-auto gap-2">
            <p className=" ml-5 mt-3 font-semibold text-lg">
              Resultats autour de vous *
            </p>
            <RadialChart oui={1545} non={234} autour={true} />
          </div>
          <div className="flex flex-col my-auto gap-2">
            <p className=" ml-5 tel:mt-3 mt-6 font-semibold text-lg">
              Les citoyens *
            </p>
            <RadialChart oui={45} non={285} />
          </div>
        </div>
        <p className="text-center tel:mt-4 mt-9 text-sm">
          * Ces données sont basées sur les votes des utilisateurs de Paul,
          partagez l'app pour nous aider à faire grandir l'échantillon de
          personnes !
        </p>
        <ButtonVote className="w-56 justify-center mt-2 mx-auto shadow-md dark:text-neutral-800 dark:border-transparent  dark:bg-white bg-neutral-900 text-neutral-300 hover:bg-current dark:hover:bg-white ">
          <div className="flex flex-row space-x-2 justify-center">
            <p className="flex my-auto tracking-normal text-sm">
              Partagez l'application
            </p>
            <ExternalLink className="flex size-4 my-auto " />
          </div>
        </ButtonVote>
      </div>
    </>
  );
};

export default StatDetaillees;
