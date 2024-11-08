import React from "react";
import Badges from "./Badges";

const SlideBadges = () => {
  return (
    <div className="flex flex-col gap-2 ml-7 overflow-x-auto">
      <div className="flex flex-row justify-between lg:justify-center ">
        <p className="font-semibold text-xl">Vos badges citoyens</p>
        <p>2/7</p>
      </div>
      <div className=" pt-3  snap-x ">
        <div className="flex flex-row lg:justify-center">
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
    </div>
  );
};

export default SlideBadges;
