import { ReactNode } from "react";

import HomePage from "./pages/home";
import AddPage from "./pages/add";
import PasswordPage from "./pages/password";

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
  {
    path: "/:passwordId",
    element: <PasswordPage />,
  },
];

export default routes;
