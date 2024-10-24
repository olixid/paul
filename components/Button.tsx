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
        "bg-white dark:bg-gray-950 w-full justify-center p-5 border border-black flex flex-col px-3 py-2 items-center hover:bg-stone-400 dark:hover:bg-gray-900 hover:cursor-pointer select-none rounded-lg font-thin tracking-wider ",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
