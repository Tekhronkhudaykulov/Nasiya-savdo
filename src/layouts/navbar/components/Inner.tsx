import { Link } from "react-router-dom";
import {
  BasketIcon,
  CompareIcon,
  FavouriteIcon,
  PayIcon,
  UserIcon,
} from "../../../assets/icon";

const list = [
  {
    name: "Сравнить",
    img: CompareIcon,
  },
  {
    name: "Оплатить",
    img: PayIcon,
  },
  {
    name: "Корзина",
    img: BasketIcon,
  },
  {
    name: "Избранные",
    img: FavouriteIcon,
  },
  {
    name: "Войти",
    img: UserIcon,
  },
];

const Inner = () => {
  return (
    <div className="flex gap-[22px]">
      {list.map((item, idx) => (
        <Link
          to={""}
          className="group text-center flex flex-col items-center justify-center gap-[5px]"
          key={idx}
        >
          <div className="flex items-center justify-center min-w-[24px] w-[24px] h-[24px] rounded-full">
            <img src={item.img} alt="" />
          </div>
          <div className="group-hover:text-darkGreen text-[10px] font-[500] text-gray">
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Inner;
