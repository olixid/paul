"use client";

import { cn } from "@/utils/helper";
import { useState } from "react";
import Button from "./Button";

const Compteur = () => {
  const [compteur, setCompteur] = useState(0);
  const myPlus = () => {
    setCompteur((oldcompteur) => oldcompteur + 1);
  };
  const myMoins = () => {
    setCompteur((oldcompteur) => oldcompteur - 1);
  };
  return (
    <div className="flex flex-row gap-3">
      <Button onClick={() => myMoins()}>-</Button>
      <div
        className={cn(
          compteur > 0 && "text-green-300",
          compteur < 0 && "text-red-300",
          "font-bold"
        )}
      >
        {compteur}
      </div>
      <Button onClick={() => myPlus()}>+</Button>
    </div>
  );
};

export default Compteur;
