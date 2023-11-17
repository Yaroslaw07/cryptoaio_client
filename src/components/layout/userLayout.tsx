import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import Backdrop from "../ui/Backdrop";

const UserLayout = () => {
  const { status } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "unauthenticated") {
      navigate("/login");
    }
  }, [status]);

  if (status !== "authenticated") {
    return <Backdrop open={true}></Backdrop>;
  }

  return (
    <div>
      <h1>user layout</h1>
      <Outlet />
    </div>
  );
};

export default UserLayout;
