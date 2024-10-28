"use client";

import React from "react";
import ResPrecedent from "./ResPrecedent";

const BlockResultat = () => {
  return (
    <div className="flex flex-col gap-2 mx-20">
      <h1 className="font-semibold text-xl my-auto ">Resultats précédents</h1>
      <br />
      <ResPrecedent date="22 septembre 2024">
        Un député surpris en achetant de a drogue doit-il, selon vous,
        démissioner ?
      </ResPrecedent>
      <ResPrecedent date="22 septembre 2024">
        Un député surpris en achetant de a drogue doit-il, selon vous,
        démissioner ?
      </ResPrecedent>
      <ResPrecedent date="22 septembre 2024">
        Un député surpris en achetant de a drogue doit-il, selon vous,
        démissioner ?
      </ResPrecedent>
      <ResPrecedent date="22 septembre 2024">
        Un député surpris en achetant de a drogue doit-il, selon vous,
        démissioner ?
      </ResPrecedent>
    </div>
  );
};

export default BlockResultat;
