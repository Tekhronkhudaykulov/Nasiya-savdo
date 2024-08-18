import { Link, Outlet, useLocation } from "react-router-dom";

import "./profile.scss";
import BreadCrumb from "../../components/breadCump/view";
import { Ava, Card, Exit, Orders, Sale } from "../../assets/icon";

const Profile = () => {
  const { pathname } = useLocation();

  const profileList = [
    {
      name: "Профиль",
      link: "/profile/profile_account",
      icon: <Ava />,
    },
    {
      name: "Мои заказы",
      link: "/profile/profile_orders",
      icon: <Orders />,
    },
    {
      name: "Мои рассрочки",
      link: "/profile/profile_sale",
      icon: <Sale />,
    },
    {
      name: "Мои карты",
      link: "/profile/profile_card",
      icon: <Card />,
    },
    {
      name: "Выйти из системы",
      link: "/",
      icon: <Exit />,
    },
  ];

  return (
    <>
      <div className="wrapper">
        <BreadCrumb
          items={[
            {
              name: "Личный кабинет",
            },
          ]}
        />
        <div className="grid grid-cols-[25%_1fr] gap-5 mb-[100px]">
          <div className="border-line border-[1px] rounded-[24px] max-h-[385px] md:p-[24px] p-4">
            <div className="flex items-center mb-[24px]">
              <div className="flex items-center mr-[12px] justify-center w-[60px] h-[60px] rounded-full bg-[#F2F5F7]">
                <Ava />
              </div>
              <p className="text-[16px] font-[500] text-[#212121]">
                Новый пользователь
              </p>
            </div>
            {profileList.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className={`flex items-center gap-x-[12px] h-[50px] pl-[12px] rounded-[12px] ${
                  item.link === pathname && "bg-[#027373] active-route"
                }`}
              >
                {item.icon}
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Profile;
