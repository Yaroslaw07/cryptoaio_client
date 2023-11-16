import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Backdrop from "../components/ui/Backdrop";

export const DashboardPage = () => {
  const { status, logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Dashboard Status:", status);
    if (status === "unauthenticated") {
      navigate("/login");
    }
  }, [status]);

  if (status === "loading") {
    return <Backdrop open={true}></Backdrop>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};
