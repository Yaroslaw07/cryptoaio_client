import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { Backdrop } from "@mui/material";

export const DashboardPage = () => {
  const { status, loadUserData, session } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") {
      navigate("/login");
    }
  }, [status]);

  if (status === "loading") {
    return <Backdrop open={true} />;
  }

  console.log("Dashboard Session:", session);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};
