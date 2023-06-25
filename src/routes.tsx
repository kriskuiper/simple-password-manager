import { ReactNode } from "react";

import HomePage from "./pages/home";
import AddPage from "./pages/add";

type ReactRouterRoute = {
  path: string;
  element: ReactNode;
};

const routes: ReactRouterRoute[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/add",
    element: <AddPage />,
  },
];

export default routes;
