"use client";

import { cn } from "@/utils/helper";
import { useState } from "react";
import { ButtonVote } from "./Button";

const Compteur = () => {
  const [compteur, setCompteur] = useState(0);
  const increase = () => {
    setCompteur((oldcompteur) => oldcompteur + 1);
  };
  const decrease = () => {
    setCompteur((oldcompteur) => oldcompteur - 1);
  };
  return (
    <div className="flex flex-row gap-3">
      <ButtonVote onClick={() => decrease()}>-</ButtonVote>
      <div
        className={cn(
          compteur > 0 && "text-green-300",
          compteur < 0 && "text-red-300",
          "font-bold"
        )}
      >
        {compteur}
      </div>
      <ButtonVote onClick={() => increase()}>+</ButtonVote>
    </div>
  );
};

export default Compteur;
