import { FC, ReactNode, useEffect } from "react";
import { Footer, Navbar } from "../layouts";
import { useLocation } from "react-router-dom";

interface Props {
  child?: ReactNode;
}

const PrivateRoute: FC<Props> = ({ child }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <Navbar />
      <div className="h-full wrapper">{child}</div>
      <Footer />
    </>
  );
};

export default PrivateRoute;
