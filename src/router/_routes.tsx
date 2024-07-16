import { APP_ROUTES } from ".";

import { Home } from "../views";

export const _routes = [
  {
    path: APP_ROUTES.HOME,
    element: Home,
    exact: true,
  },
];
