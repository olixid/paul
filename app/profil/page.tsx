"use client";

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
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { ButtonProfil } from "@/components/Button";

const supabase = createClient(
  "https://axxhmtgucstevcqtpltc.supabase.co",
  "<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4eGhtdGd1Y3N0ZXZjcXRwbHRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1Mzk5MjEsImV4cCI6MjA0NTExNTkyMX0.8RbGXncpqm2P914rl3W4jHtbildSLcjVr69cGDdg1dc>"
);

const Profil = () => {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-900 flex flex-col gap-5">
      <p className="tel:mx-14 mx-10  mt-9 mb-4 font-semibold text-4xl">
        Bonjour flo !
      </p>
      <div className="flex flex-col   p-7 pt-6 gap-10 md:flex-row md:justify-around">
        <div className="flex justify-center">
          <Depute
            name="Anais Belouassa-Cherifi"
            circons="Circoscription n°1 - Rhone"
            parti="La France Insoumise"
          />
        </div>
        <div className="flex flex-col gap-5 my-auto ">
          <div className="flex justify-center">
            <ButtonVote className="flex flex-row justify-between lg:w-96  w-80 tracking-normal py-3 px-5 border-neutral-300 bg-white dark:text-black hover:bg-neutral-100 dark:hover:border-neutral-400 dark:hover:bg-neutral-400">
              <Forward className=" flex my-auto  " />
              <div className="flex flex-col text-center ">
                <p className="font-semibold">Partagez l'application !</p>
                <p className="text-sm">Aidez-nous à agrandir l'échantillon</p>
              </div>
              <ChevronRight className="flex my-auto " />
            </ButtonVote>
          </div>
          <div className="flex justify-center">
            <ButtonVote className=" flex flex-row justify-between lg:w-96  w-80 tracking-normal py-3 px-5  border-neutral-300 bg-white dark:text-black  hover:bg-neutral-100 dark:hover:border-neutral-400 dark:hover:bg-neutral-400">
              <Heart className=" flex my-auto  " />
              <div className="flex flex-col text-center">
                <p className="font-semibold">Soutenez Paul !</p>
                <p className="text-sm">On a besoin de vous</p>
              </div>
              <ChevronRight className="flex my-auto " />
            </ButtonVote>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <SlideBadges />
        <div>
          <ButtonProfil>
            <User className=" my-auto " />
            <p className=" my-auto ">Mon compte</p>
          </ButtonProfil>
          <ButtonProfil className=" border-t-0 ">
            <Bell className=" my-auto " />
            <p className=" my-auto font-semibold">Notifications</p>
          </ButtonProfil>
        </div>

        <div>
          <ButtonProfil>
            <Lock className=" my-auto " />
            <p className=" my-auto ">Sécurité et confidentialité</p>
          </ButtonProfil>
          <ButtonProfil className=" border-t-0 ">
            <MessageCircle className=" my-auto " />
            <p className=" my-auto ">Le mot des créateurs</p>
          </ButtonProfil>
        </div>

        <div>
          <ButtonProfil>
            <Star className=" my-auto " />
            <p className=" my-auto ">Noter l'application</p>
          </ButtonProfil>
          <ButtonProfil className=" border-t-0 ">
            <MessageSquare className=" my-auto " />
            <p className=" my-auto ">Feedback</p>
          </ButtonProfil>
        </div>

        <div>
          <ButtonProfil className="font-normal hover:font-normal">
            Politique de confidentialité
          </ButtonProfil>
          <ButtonProfil className="border-t-0 font-normal hover:font-normal">
            Conditions d'utilisation
          </ButtonProfil>
        </div>

        <ButtonProfil className="  text-red-500 ">Déconnexion</ButtonProfil>

        <div />
      </div>
    </div>
  );
};

export default Profil;
