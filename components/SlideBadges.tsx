import React from "react";
import Badges from "./Badges";

const SlideBadges = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between ">
        <p className="font-semibold text-xl">Vos badges citoyens</p>
        <p>2/7</p>
      </div>
      <div className="flex flex-row space-x-7">
        <Badges
          title="Initié politque"
          task="Vote sur Paul"
          score={1}
          scoreDone={1}
        />
        <Badges
          title="Messager"
          task="Partage question"
          score={1}
          scoreDone={1}
        />
        <Badges
          title="Messager"
          task="Partage question"
          score={1}
          scoreDone={2}
        />
        <Badges
          title="Messager"
          task="Partage question"
          score={1}
          scoreDone={1}
        />
        <Badges
          title="Messager"
          task="Partage question"
          score={1}
          scoreDone={1}
        />
        <Badges
          title="Messager"
          task="Partage question"
          score={1}
          scoreDone={1}
        />
        <Badges
          title="Messager"
          task="Partage question"
          score={1}
          scoreDone={1}
        />
      </div>
    </div>
  );
};

export default SlideBadges;
