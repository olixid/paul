import StatDetaillees from "@/components/StatDetaillees";
import { ArrowLeft } from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col   bg-neutral-200 dark:bg-neutral-900 ">
      <div className="flex flex-row fixed top-0 left-0 right-0 bg-neutral-300 dark:bg-neutral-900 p-3 dark  gap-2 border-b-2 border-neutral-400 justify-between ">
        <div className="flex  my-auto">
          <ArrowLeft className="ml-2" />
        </div>
        <div className="flex flex-col justify-self-center -ml-7  gap-1">
          <p className=" flex justify-center font-semibold">
            Statistiques détaillées
          </p>
          <p className="flex justify-center text-[12px] text-neutral-700">
            31/10/2024
          </p>
        </div>
        <div />
      </div>
      <div className="static p-5 pt-24">
        <StatDetaillees
          question="Faut-il rendre le nutriscore obligatoire en France ?"
          theme="Société"
        />
      </div>
    </div>
  );
};

export default page;
