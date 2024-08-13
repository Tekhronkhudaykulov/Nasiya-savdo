import { lazy } from "react";

const Home = lazy(() => import("./Home/view"));
const ProductSingle = lazy(() => import("./ProductSingle/view"));
const Basket = lazy(() => import("./Basket/Basket"));
const BasketOutlet = lazy(() => import("./Basket/view"));
const BasketForm = lazy(() => import("./Basket/view/BasketForm"));
const Favourite = lazy(() => import("./Favourite/view"));
const Profile = lazy(() => import("./Profile/view"));
const ProfileAccount = lazy(() => import("./Profile/view/ProfileAccount"));
const ProfileOrders = lazy(() => import("./Profile/view/ProfileOrders"));
const ProfileSale = lazy(() => import("./Profile/view/ProfileSale"));
const ProfileCard = lazy(() => import("./Profile/view/ProfileCard"));

export {
  Home,
  ProductSingle,
  Basket,
  BasketOutlet,
  BasketForm,
  Favourite,
  Profile,
  ProfileAccount,
  ProfileOrders,
  ProfileSale,
  ProfileCard,
};
