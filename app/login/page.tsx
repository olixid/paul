"use client";
import { login } from "./actions";
import { redirect } from "next/navigation";
import Input from "@/components/Input";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-8 bg-neutral-200 tel:w-1/3 tel:min-w-96 w-screen max-w-[450px] tel:h-auto h-screen tel:rounded-2xl p-6  mx-auto tel:my-[2%]">
      <h1 className="text-3xl font-bold pt-4">Connexion</h1>
      <form className="flex flex-col gap-6">
        <Input name="email" type="email">
          Email
        </Input>
        <div>
          <Input name="password" type="password">
            Mot de passe
          </Input>
          <p className="text-right underline text-sm text-neutral-500 tracking-tight pt-1">
            mot de passe oublié
          </p>
        </div>
        <button
          formAction={login}
          className="rounded-xl h-11 px-3 border tel:w-4/5 w-full mx-auto border-neutral-900 bg-neutral-900 text-white mt-2"
        >
          Je me connecte
        </button>
        <button
          onClick={() => redirect("/signing")}
          className="rounded-xl h-11 px-3 border tel:w-4/5 w-full mx-auto text-neutral-700 border-neutral-300 bg-white"
        >
          Je n'ai pas de compte
        </button>
      </form>
    </div>
  );
}
