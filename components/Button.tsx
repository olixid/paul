import { cn } from "@/utils/helper";
import * as React from "react";

export const ButtonVote = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "flex  w-full justify-center p-5 border border-black flex-col bg-transparent px-3 py-2  dark:hover:bg-neutral-700  hover:bg-neutral-200 hover:font-semibold hover:cursor-pointer select-none rounded-lg tracking-wider ",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ButtonIcon = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        " justify-center p-5 border border-stone-400 flex flex-row bg-transparent px-3 py-2 hover:bg-neutral-700 hover:cursor-pointer select-none rounded-full font-thin tracking-wider ",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ButtonProfil = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        " w-full  p-5 border dark:hover:bg-neutral-400  hover:bg-neutral-100 hover:font-semibold hover:cursor-pointer select-none  tracking-wider bg-white  border-neutral-300 py-4 px-7 flex flex-row space-x-3 text-black font-semibold text-[15px] dark:bg-neutral-300 dark:border-neutral-400",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
