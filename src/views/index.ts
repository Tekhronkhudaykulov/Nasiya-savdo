import { lazy } from "react";

const Home = lazy(() => import("./Home/view"));
const Profile = lazy(() => import("./Profile/view"));
const ProfileAccount = lazy(() => import("./Profile/view/ProfileAccount"));
const ProfileOrders = lazy(() => import("./Profile/view/ProfileOrders"));

export { Home, Profile, ProfileAccount, ProfileOrders };
