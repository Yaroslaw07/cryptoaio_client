import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/Welcome";
import Layout from "./components/layout/Layout";
import SignUp from "./pages/auth/Signup";
import LoginPage from "./pages/auth/Login";
import UserLayout from "./components/layout/UserLayout";
import { DashboardPage, loader as DashboardLoader } from "./pages/Dashboard";
import ScriptPage from "./pages/scripts/ScriptPage";
import NewScriptPage from "./pages/scripts/NewScriptPage";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
            loader: DashboardLoader(queryClient),
          },
          {
            path: "/profile",
            element: <div>Profile</div>,
          },
          {
            path: "/scripts/:scriptId",
            element: <ScriptPage />,
          },
          {
            path: "/scripts/new",
            element: <NewScriptPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
