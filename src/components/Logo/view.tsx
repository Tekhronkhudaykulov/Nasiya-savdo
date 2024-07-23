import { ASSETS } from "../../assets/img/assets";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <div className={`logo ${className} min-w-[150px] w-[150px] self-center`}>
      <img src={ASSETS.Logo} className="w-full" alt="" />
    </div>
  );
};

export default Logo;
