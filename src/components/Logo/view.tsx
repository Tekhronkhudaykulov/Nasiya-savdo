import { Link } from "react-router-dom";
import { ASSETS } from "../../assets/img/assets";
import { APP_ROUTES } from "../../router";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link
      to={APP_ROUTES.HOME}
      className={`block ${className} min-w-[150px] w-[150px] self-center`}
    >
      <img src={ASSETS.Logo} className="w-full" alt="" />
    </Link>
  );
};

export default Logo;
