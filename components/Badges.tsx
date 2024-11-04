import React from "react";

const Badges = ({
  task,
  title,
  scoreDone,
  score,
}: {
  title: string;
  task: string;
  scoreDone: number;
  score: number;
}) => {
  return (
    <div className={scoreDone === score ? " " : "opacity-50"}>
      <div className="flex border rounded-full h-28 w-28 bg-neutral-300"></div>
      <div className="text-center mt-2">
        <p className="font-[550]">{title}</p>
        <div className="text-sm text-neutral-500">
          <p>
            {scoreDone}/{score}
          </p>
          <p>{task}</p>
        </div>
      </div>
    </div>
  );
};

export default Badges;
