import { APP_ROUTES } from ".";

import { Home, Profile, ProfileAccount, ProfileOrders } from "../views";

export const _routes = [
  {
    path: APP_ROUTES.HOME,
    element: Home,
    exact: true,
  },
  {
    path: APP_ROUTES.PROFILE,
    element: Profile,
  },

  {
    path: APP_ROUTES.PROFILE,
    element: Profile,
    childs: [
      {
        path: APP_ROUTES.PROFILE_ACCOUNT,
        element: ProfileAccount,
      },
      {
        path: APP_ROUTES.PROFILE_ORDERS,
        element: ProfileOrders,
      },
      // {
      //   path: APP_ROUTES.PROFILE_SALE,
      //   element: ProfileSale,
      // },
      // {
      //   path: APP_ROUTES.PROFILE_PAYMENT,
      //   element: ProfilePayment,
      // },
    ],
  },
];
