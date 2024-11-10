import React from "react";

const Input = ({
  name,
  type,
  children,
}: {
  name: string;
  type: string;
  children: React.ReactNode;
}) => {
  return (
    <label
      htmlFor={name}
      className="flex flex-col  text-[12px] gap-2 text-neutral-500 font-semibold tracking-wide"
    >
      {children}
      <input
        name={name}
        type={type}
        className="rounded-xl h-11 px-3 border border-neutral-300"
        required
      />
    </label>
  );
};

export default Input;
