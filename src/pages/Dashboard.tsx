import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../hooks/useSession";
import Backdrop from "../components/ui/Backdrop";

export const DashboardPage = () => {
  const { status } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Dashboard Status:", status);
    if (status === "unauthenticated") {
      navigate("/login");
    }
  }, [status]);

  if (status === "loading") {
    return <Backdrop open={true} />;
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};
