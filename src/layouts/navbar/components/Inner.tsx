import { Link, useLocation } from "react-router-dom";
import {
  BasketIcon,
  CompareIcon,
  FavouriteIcon,
  PayIcon,
  UserIcon,
} from "../../../assets/icon";
import { APP_ROUTES } from "../../../router";
import { useState } from "react";
import SendCode from "./../../../modal/auth/SendCode";
import SendNum from "../../../modal/auth/SendNum";
const list = [
  {
    name: "Сравнить",
    img: CompareIcon,
    link: "",
  },
  {
    name: "Оплатить",
    img: PayIcon,
    link: "",
  },
  {
    name: "Корзина",
    img: BasketIcon,
    link: `${APP_ROUTES.BASKET}`,
  },
  {
    name: "Избранные",
    img: FavouriteIcon,
    link: `${APP_ROUTES.FAVOURITE}`,
  },
  {
    name: "Войти",
    img: UserIcon,
    link: `${APP_ROUTES.PROFILE}/${APP_ROUTES.PROFILE_ACCOUNT}`,
  },
];

const Inner = () => {
  const authed = localStorage.getItem("authorised") === "true";
  const [isNumberModalOpen, setIsNumberModalOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex gap-[22px]">
      {isNumberModalOpen && (
        <SendNum
          setIsCodeModalOpen={setIsCodeModalOpen}
          isNumberModalOpen={isNumberModalOpen}
          setIsNumberModalOpen={setIsNumberModalOpen}
        />
      )}
      {isCodeModalOpen && (
        <SendCode
          isCodeModalOpen={isCodeModalOpen}
          setIsCodeModalOpen={setIsCodeModalOpen}
        />
      )}
      {list.map((item, idx) => {
        const displayName =
          item.name === "Войти" && authed ? "Профиль" : item.name;
        const isActive =
          currentPath.split("/")?.[1] === item.link.split("/")?.[1];

        return (
          <Link
            onClick={(event) => {
              if (!authed && item.name === "Войти") {
                event.preventDefault();
                setIsNumberModalOpen(true);
              }
            }}
            to={item.link}
            className={`group text-center flex flex-col items-center justify-center gap-[5px] ${
              isActive ? "text-darkGreen" : "text-gray"
            }`}
            key={idx}
          >
            <div
              className={`flex items-center justify-center w-[27px] h-[27px] flex-shrink-0 p-[3px] rounded-full ${
                isActive ? "bg-buttonBg" : ""
              }`}
            >
              <img className="w-full h-full" src={item.img} alt={item.name} />
            </div>
            <div
              className={`text-[10px] font-[500] group-hover:text-darkGreen ${
                isActive ? "text-darkGreen" : "text-gray"
              }`}
            >
              {displayName}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Inner;
