import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import Layout from "./components/layout/Layout";
import SignUp from "./pages/auth/Signup";
import LoginPage from "./pages/auth/Login";
import UserLayout from "./components/layout/UserLayout";
import { DashboardPage } from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <UserLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/profile",
            element: <div>Profile</div>,
          },
          {
            path: "/script/:scriptId",
            element: <div>Script with his id</div>,
          },
        ],
      },
    ],
  },
]);

export default router;
