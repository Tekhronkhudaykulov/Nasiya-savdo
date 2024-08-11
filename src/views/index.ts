import { lazy } from "react";

const Home = lazy(() => import("./Home/view"));
const Basket = lazy(() => import("./Basket/view"));
const Favourite = lazy(() => import("./Favourite/view"));
const Profile = lazy(() => import("./Profile/view"));
const ProfileAccount = lazy(() => import("./Profile/view/ProfileAccount"));
const ProfileOrders = lazy(() => import("./Profile/view/ProfileOrders"));
const ProfileSale = lazy(() => import("./Profile/view/ProfileSale"));
const ProfileCard = lazy(() => import("./Profile/view/ProfileCard"));

export {
  Home,
  Basket,
  Favourite,
  Profile,
  ProfileAccount,
  ProfileOrders,
  ProfileSale,
  ProfileCard,
};
