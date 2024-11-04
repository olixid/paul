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
    <div
      className={cn(
        " w-full justify-center p-5 border border-black flex flex-col bg-transparent px-3 py-2 items-center dark:hover:bg-neutral-700 hover:border-2 hover:bg-neutral-200 hover:font-semibold hover:cursor-pointer select-none rounded-lg tracking-wider ",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
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
    <div
      className={cn(
        " justify-center p-5 border border-stone-400 flex flex-row bg-transparent px-3 py-2 hover:bg-neutral-700 hover:cursor-pointer select-none rounded-full font-thin tracking-wider ",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
