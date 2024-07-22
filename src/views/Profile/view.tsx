import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Logout,
  Payment,
  Sales,
  UserProfile,
  Orders,
  Ava,
} from "../../assets/icon";
import { Footer } from "../../layouts";
import "./profile.scss";
import BreadCrumb from "../../components/breadCump/view";

const Profile = () => {
  const { pathname } = useLocation();

  const profileList = [
    {
      name: "Профиль",
      link: "/profile/profile_account",
      icon: <UserProfile />,
    },
    {
      name: "Мои заказы",
      link: "/profile/profile_orders",
      icon: <Orders />,
    },
    {
      name: "Мои рассрочки",
      link: "/profile/orders",
      icon: <Sales />,
    },
    {
      name: "Мои рассрочки",
      link: "/profile/kredit",
      icon: <Payment />,
    },
    {
      name: "Выйти из системы",
      link: "/",
      icon: <Logout />,
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
        <div className="profileContainer mb-[100px]">
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
            {/* <div
              onClick={() => navigate("information")}
              className="flex items-center gap-x-[12px] h-[50px] pl-[12px] bg-linear rounded-[12px]"
            >
              <Users className="[&>path]:stroke-white" />
              <p className="text-[16px] font-[400] !text-white">Профиль</p>
            </div>
            <div
              onClick={() => navigate("favourites")}
              className="flex items-center gap-x-[12px] h-[50px] pl-[12px]"
            >
              <Favorites />
              <p className="text-[16px] font-[400]">Избранное</p>
            </div>
            <div
              onClick={() => navigate("orders")}
              className="flex items-center gap-x-[12px] h-[50px] pl-[12px]"
            >
              <Orders />
              <p className="text-[16px] font-[400]">Заказы</p>
            </div>
            <div
              onClick={() => navigate("kredit")}
              className="flex items-center gap-x-[12px] h-[50px] pl-[12px]"
            >
              <KreditIcon />
              <p className="text-[16px] font-[400]">Мои рассрочки</p>
            </div> */}
            {/* <div className="flex items-center gap-x-[12px] h-[50px] pl-[12px]">
              <Logout />
              <p className="text-[16px] font-[400]">Выход</p>
            </div> */}
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
