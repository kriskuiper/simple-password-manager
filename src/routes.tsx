import { ReactNode } from "react";

import HomePage from "./pages/home";
import AddPage from "./pages/add";
import PasswordPage from "./pages/password";
import ClientPage from "./pages/client";

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
  {
    path: "/clients/:client",
    element: <ClientPage />,
  },
];

export default routes;
