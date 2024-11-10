"use client";
import React from "react";
import { redirect } from "next/navigation";
import { signup } from "./action";
import Input from "@/components/Input";

const Registration = () => {
  return (
    <div className="flex flex-col gap-8 bg-neutral-200 tel:w-1/3 tel:min-w-96 w-screen max-w-[450px] tel:h-auto h-screen tel:rounded-2xl p-6  mx-auto tel:my-[2%]">
      <h1 className="text-3xl font-bold pt-4">Inscription</h1>
      <form className="flex flex-col gap-6">
        <Input name="pseudo" type="text">
          Pseudo
        </Input>
        <Input name="email" type="email">
          Email
        </Input>
        <Input name="password" type="password">
          Mot de passe
        </Input>
        <div className="text-center text-neutral-500">
          <p>En créant votre compte, vous acceptez les</p>
          <p className="underline">Conditions Générales d'Utilisation</p>
        </div>
        <button
          formAction={signup}
          className="rounded-xl h-11 px-3 border tel:w-4/5 w-full mx-auto border-neutral-900 bg-neutral-900 text-white mt-2"
        >
          Je crée mon compte
        </button>
        <button
          onClick={() => redirect("/login")}
          className="rounded-xl h-11 px-3 border tel:w-4/5 w-full mx-auto text-neutral-700 border-neutral-300 bg-white"
        >
          J'ai déjà un compte
        </button>
      </form>
    </div>
  );
};

export default Registration;
