import { useEffect, useState } from "react";
import { NavbarCenter, NavbarTop } from "./components";
import MultiLevelDropdown from "./components/MultiLevelDropdown";
import "./navbar.scss";

const Navbar = () => {
  const [activeCateg, setActiveCateg] = useState(false);

  useEffect(() => {
    if (activeCateg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCateg]);

  return (
    <>
      <NavbarTop />
      <NavbarCenter setActiveCateg={setActiveCateg} activeCateg={activeCateg} />
      {activeCateg && <MultiLevelDropdown />}
    </>
  );
};

export default Navbar;
