import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import Layout from "./components/layout/layout";
import SignUp from "./pages/auth/signup";
import LoginPage from "./pages/auth/login";

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
        path: "/dashboard",
        element: <div>Profile</div>,
      },
      {
        path: "/profile",
        element: <div></div>,
      },
      {
        path: "/script/:scriptId",
        element: null,
      },
    ],
  },
]);

export default router;
