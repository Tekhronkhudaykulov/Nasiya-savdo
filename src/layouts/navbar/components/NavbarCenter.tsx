import { IoMdMenu } from "react-icons/io";
import { Category, Inner, Search } from ".";
import { Logo } from "../../../components";

const NavbarCenter = ({
  setActiveCateg,
  activeCateg,
}: {
  setActiveCateg: any;
  activeCateg: any;
}) => {
  return (
    <div className="sticky top-0 left-0 w-full py-[15px] z-[99] bg-white">
      <div className="wrapper">
        <div className="flex justify-between md:justify-start gap-2 md:gap-0">
          <button className="text-[32px] mr-5 text-txtSecondary2 2md:block hidden">
            <IoMdMenu />
          </button>
          <Logo className="lg:mr-[40px] md:mr-[20px]" />
          <Category activeCateg={activeCateg} setActiveCateg={setActiveCateg} />
          <Search />
          <Inner />
        </div>
      </div>
    </div>
  );
};

export default NavbarCenter;
