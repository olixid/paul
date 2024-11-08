"use client";

import React from "react";
import ResPrecedent from "./ResPrecedent";

const BlockResultat = ({ handleClick }: { handleClick: Function }) => {
  return (
    <div className="flex flex-col gap-2 tel:mx-8 sm:mx-10 md:mx-16 lg:mx-20 mx-4">
      <h1 className="font-semibold text-xl my-auto ">Resultats précédents</h1>
      <br />
      <ResPrecedent date="22 septembre 2024" handleClick={() => handleClick()}>
        Un député surpris en achetant de a drogue doit-il, selon vous,
        démissioner ?
      </ResPrecedent>
      <ResPrecedent date="22 septembre 2024" handleClick={() => handleClick()}>
        Un député surpris en achetant de a drogue doit-il, selon vous,
        démissioner ?
      </ResPrecedent>
      <ResPrecedent date="22 septembre 2024" handleClick={() => handleClick()}>
        Un député surpris en achetant de a drogue doit-il, selon vous,
        démissioner ?
      </ResPrecedent>
      <ResPrecedent date="22 septembre 2024" handleClick={() => handleClick()}>
        Un député surpris en achetant de a drogue doit-il, selon vous,
        démissioner ?
      </ResPrecedent>
    </div>
  );
};

export default BlockResultat;
