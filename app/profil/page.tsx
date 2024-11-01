import { ButtonVote } from "@/components/Button";
import Depute from "@/components/Depute";
import { ChevronRight } from "lucide-react";
import React from "react";

const Profil = () => {
  return (
    <div className="flex flex-col gap-2 bg-white">
      <p className="mx-5 font-semibold text-3xl"> Bonjour flo !</p>
      <Depute />
      <ButtonVote>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p>Partagez l'application</p>
            <p>Aidez-nous à agrandir l'échantillon</p>
          </div>
          <ChevronRight />
        </div>
      </ButtonVote>
    </div>
  );
};

export default Profil;
