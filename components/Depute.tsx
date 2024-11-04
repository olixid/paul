import React from "react";
import AvatarDepute from "./AvatarDepute";

const Depute = ({
  name,
  circons,
  parti,
}: {
  name: string;
  circons: string;
  parti: string;
}) => {
  return (
    <div className="flex flex-row border w-[29%] justify-between rounded-xl shadow-lg h-48 ">
      <div className="flex border-r w-full p-3">
        <div className="flex flex-col my-auto gap-2 ">
          <div className="flex justify-center  ">
            <AvatarDepute src="https://github.com/shadcn.png" />
          </div>
          <div className="text-center text-[20px] font-[550]"> {name}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-right w-full ">
        <div className="flex flex-col pt-4 px-3 h-full ">
          <p className=" font-semibold">Circonscription</p>
          <p className="">{circons}</p>
        </div>
        <hr className="w-full" />
        <div className="pt-2 px-3 h-full">
          <p className=" font-semibold ">Parti politique</p>
          <p className="">{parti}</p>
        </div>
      </div>
    </div>
  );
};

export default Depute;
