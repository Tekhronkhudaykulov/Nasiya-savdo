import { FC, ReactNode } from "react";
import { Footer, Navbar } from "../layouts";

interface Props {
  child?: ReactNode;
}

const PrivateRoute: FC<Props> = ({ child }) => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="py-[23px] h-full ">{child}</div>
      <Footer />
    </div>
  );
};

export default PrivateRoute;
