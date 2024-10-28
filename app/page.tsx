import BlockMenu from "@/components/BlockMenu";
import Question from "@/components/Question";
import { ThemeToggle } from "@/components/themeToggle";
import Image from "next/image";

export const Home = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row justify-between  m-5 px-40">
        <ThemeToggle />
        <p className="text-white font-bold text-2xl my-auto">Le vote du jour</p>
        <p className="text-neutral-500 my-auto">6102 votant(e)s</p>
      </div>
      <div className="flex justify-center">
        <BlockMenu>
          texte <br />
          hgj
          <br />
          ghf
          <br /> blabla
        </BlockMenu>
      </div>
    </div>
  );
};
export default Home;
