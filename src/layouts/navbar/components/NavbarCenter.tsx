import { Category, Inner, Search } from ".";
import { Logo } from "../../../components";

const NavbarCenter = () => {
  return (
    <div className="sticky top-0 left-0 w-full py-[15px] z-[99] bg-white">
      <div className="wrapper">
        <div className="flex">
          <Logo className="mr-[40px]" />
          <Category />
          <Search />
          <Inner />
        </div>
      </div>
    </div>
  );
};

export default NavbarCenter;
