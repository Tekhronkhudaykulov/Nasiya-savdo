import { FC, ReactNode } from "react";
import { Footer, Navbar } from "../layouts";

interface Props {
  child?: ReactNode;
}

const PrivateRoute: FC<Props> = ({ child }) => {
  return (
    <>
      <Navbar />
      <div className="h-full wrapper">{child}</div>
      <Footer />
    </>
  );
};

export default PrivateRoute;
