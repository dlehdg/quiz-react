import { createBrowserRouter } from "react-router-dom";
import ErrorLayout from "../page/ErrorLayout";
import RootLayout from "../page/RootLayout";
import navigationItems from "./navigation";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorLayout />,
    children: navigationItems,
  },
];

let router = createBrowserRouter(routes);

export default router;
