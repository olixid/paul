import { cn } from "@/utils/helper";
import { Speaker, Speech } from "lucide-react";

import React from "react";

const Label = ({
  children,
  symbol,
  className,
  color,
}: {
  children: React.ReactNode;
  symbol?: "dot" | "speaker";
  className?: string;
  color?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-none flex-row gap-1 w-fit bg-neutral-800  rounded-full py-[6px] px-3 text-white border border-neutral-800",
        className
      )}
    >
      {symbol === "dot" ? (
        <span
          className={cn(
            " static flex h-2 w-2 my-auto rounded-full mx-1 bg-white  ",
            color
          )}
        ></span>
      ) : (
        symbol === "speaker" && <Speech className="flex my-auto h-4 w-4 " />
      )}

      <span className="my-auto text-xs font-semibold mx-1">{children}</span>
    </div>
  );
};

export default Label;
