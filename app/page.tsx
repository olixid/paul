import BlockMenu from "@/components/BlockMenu";

import { ThemeToggle } from "@/components/themeToggle";

export const Home = () => {
  return (
    <div className="flex flex-col  gap-1">
      <div className="flex flex-row justify-between  m-4 lg:px-40 md:px-28 sm:px-18 tel:px-12 px-2">
        <p className=" text-white  font-bold text-2xl my-auto">
          Le vote du jour
        </p>
        <p className="text-neutral-500 my-auto">6102 votant(e)s</p>
      </div>
      <div className="flex justify-center ">
        <BlockMenu />
      </div>
      <div className="tel:absolute md:ml-8 tel:ml-4 tel:mt-4 static flex justify-end -mt-8 mr-2 ">
        <ThemeToggle />
      </div>
    </div>
  );
};
export default Home;
