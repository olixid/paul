import { ButtonVote } from "@/components/Button";
import Depute from "@/components/Depute";
import SlideBadges from "@/components/SlideBadges";
import {
  Bell,
  ChevronRight,
  Forward,
  Heart,
  Lock,
  MessageCircle,
  MessageSquare,
  Star,
  User,
} from "lucide-react";
import React from "react";

const Profil = () => {
  return (
    <div className="bg-neutral-100 flex flex-col gap-5">
      <div className="flex flex-col   p-7 pt-6 gap-10">
        <p className="mx-5 font-semibold text-4xl"> Bonjour flo !</p>
        <Depute
          name="Anais Belouassa-Cherifi"
          circons="Circoscription n°1 - Rhone"
          parti="La France Insoumise"
        />
        <div className="flex flex-col gap-5">
          <ButtonVote className="flex-row justify-between w-1/4 tracking-normal py-3 px-5 border-neutral-300">
            <Forward className=" flex my-auto  " />
            <div className="flex flex-col text-center ">
              <p className="font-semibold">Partagez l'application !</p>
              <p className="text-sm">Aidez-nous à agrandir l'échantillon</p>
            </div>
            <ChevronRight className="flex my-auto " />
          </ButtonVote>
          <ButtonVote className=" w-1/4 flex-row justify-between  tracking-normal py-3 px-5  border-neutral-300">
            <Heart className=" flex my-auto  " />
            <div className="flex flex-col text-center">
              <p className="font-semibold">Soutenez Paul !</p>
              <p className="text-sm">On a besoin de vous</p>
            </div>
            <ChevronRight className="flex my-auto " />
          </ButtonVote>
        </div>
        <SlideBadges />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <div className="bg-white w-full border border-neutral-300 py-4 px-7 flex flex-row space-x-3 ">
            <User />
            <p className=" my-auto font-semibold">Mon compte</p>
          </div>
          <div className="bg-white w-full border-b border-neutral-300 py-4 px-7 flex flex-row space-x-3 ">
            <Bell />
            <p className=" my-auto font-semibold">Notifications</p>
          </div>
        </div>

        <div>
          <div className="bg-white w-full border border-neutral-300 py-4 px-7 flex flex-row space-x-3 ">
            <Lock />
            <p className=" my-auto font-semibold">
              Sécurité et confidentialité
            </p>
          </div>
          <div className="bg-white w-full border-b border-neutral-300 py-4 px-7 flex flex-row space-x-3 ">
            <MessageCircle />
            <p className=" my-auto font-semibold">Le mot des créateurs</p>
          </div>
        </div>

        <div>
          <div className="bg-white w-full border border-neutral-300 py-4 px-7 flex flex-row space-x-3 ">
            <Star />
            <p className=" my-auto font-semibold">Noter l'application</p>
          </div>
          <div className="bg-white w-full border-b border-neutral-300 py-4 px-7 flex flex-row space-x-3 ">
            <MessageSquare />
            <p className=" my-auto font-semibold">Feedback</p>
          </div>
        </div>

        <div>
          <div className="bg-white w-full border border-neutral-300 py-4 px-7 flex flex-row space-x-3 ">
            <p className="text-[15px] my-auto ">Politique de confidentialité</p>
          </div>
          <div className="bg-white w-full border-b border-neutral-300 py-4 px-7 flex flex-row space-x-3 ">
            <p className=" text-[15px] my-auto ">Conditions d'utilisation</p>
          </div>
        </div>

        <div className="bg-white w-full border border-neutral-300 py-4 px-7 flex flex-row space-x-3 ">
          <p className=" text-[15px] my-auto text-red-500 font-semibold ">
            Déconnexion
          </p>
        </div>

        <div />
      </div>
    </div>
  );
};

export default Profil;
