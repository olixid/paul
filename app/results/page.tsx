import BlockResultat from "@/components/BlockResultats";
import Compteur from "@/components/Compteur";
import Question from "@/components/Question";
import ResPrecedent from "@/components/ResPrecedent";
import React from "react";

const Rien = () => {
  return (
    <div className="flex flex-col gap-2 bg-neutral-200 dark:bg-neutral-900">
      <div className="flex  justify-center">
        <Question
          question="Faut-il faire payer l'entrée de la cathédrale Notre-Dame de Paris?"
          theme="Société"
          intitule="Hier"
          className=" border border-black m-7 lg:mt-12 dark:bg-neutral-100 bg-neutral-800 dark:text-black text-white "
        />
      </div>
      <BlockResultat />
    </div>
  );
};

export default Rien;
