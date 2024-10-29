import BlockResultat from "@/components/BlackResultats";
import Compteur from "@/components/Compteur";
import Question from "@/components/Question";
import ResPrecedent from "@/components/ResPrecedent";
import React from "react";

const Rien = () => {
  return (
    <div className="flex flex-col gap-2 bg-neutral-300">
      <Question
        question="Faut-il faire payer l'entrée de la cathédrale Notre-Dame de Paris?"
        theme="Société"
        intitule="Hier"
      />
      <BlockResultat />
    </div>
  );
};

export default Rien;
