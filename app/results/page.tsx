"use client";
import BlockResultat from "@/components/BlockResultats";
import Compteur from "@/components/Compteur";
import Question from "@/components/Question";
import ResPrecedent from "@/components/ResPrecedent";
import React, { useState } from "react";

const Results = () => {
  const [stats, setStats] = useState(false);
  function printStats() {
    setStats((stats) => !stats);
  }

  return (
    <div className="flex flex-col gap-2 bg-neutral-200 dark:bg-neutral-900 ">
      <div className="flex  justify-center">
        <Question
          stats={stats}
          handleClick={() => printStats()}
          question="Faut-il faire payer l'entrée de la cathédrale Notre-Dame de Paris?"
          theme="Société"
          intitule="Hier"
          className=" border border-black m-7 lg:mt-12 dark:bg-neutral-100 bg-neutral-800 dark:text-black text-white "
        />
      </div>
      <BlockResultat handleClick={() => printStats()} />
    </div>
  );
};

export default Results;
