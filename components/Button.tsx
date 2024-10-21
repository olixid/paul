import * as React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div
      className="bg-stone-500 flex flex-col h-5 w-5 hover:bg-stone-400 hover:cursor-pointer select-none rounded-lg"
      onClick={onClick}
    >
      <span className="mx-auto -my-1">{children}</span>
    </div>
  );
};

export default Button;
