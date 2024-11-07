"use client";

import React from "react";
import AvatarDepute from "./AvatarDepute";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://axxhmtgucstevcqtpltc.supabase.co",
  "<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4eGhtdGd1Y3N0ZXZjcXRwbHRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1Mzk5MjEsImV4cCI6MjA0NTExNTkyMX0.8RbGXncpqm2P914rl3W4jHtbildSLcjVr69cGDdg1dc>"
);

const Depute = ({
  name,
  circons,
  parti,
}: {
  name: string;
  circons: string;
  parti: string;
}) => {
  return (
    <div className="flex flex-row border border-white lg:w-[460px]  w-[400px]  justify-between rounded-xl shadow-md h-52 bg-white dark:bg-neutral-300 dark:shadow-neutral-300 dark:text-black dark:border-neutral-300 border-t-2 mt-6 min-w-80">
      <div className="absolute bg-neutral-300 dark:bg-neutral-400 -mt-8 ml-8 px-3 py-[5px]  rounded-t-md text-sm ">
        Votre deputé.e
      </div>
      <div className="flex border-r dark:border-black border-neutral-300 w-full p-3 ">
        <div className="flex flex-col my-auto gap-2 ">
          <div className="flex justify-center  ">
            <AvatarDepute src="https://github.com/shadcn.png" />
          </div>
          <div className="text-center text-[20px] font-[550]"> {name}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-right w-full ">
        <div className="flex flex-col pt-4 px-3 h-full ">
          <p className=" font-semibold">Circonscription</p>
          <p className="">{circons}</p>
        </div>
        <hr className="w-full dark:border-black border-neutral-300" />
        <div className="pt-2 px-3 h-full">
          <p className=" font-semibold ">Parti politique</p>
          <p className="">{parti}</p>
        </div>
      </div>
    </div>
  );
};

export default Depute;
