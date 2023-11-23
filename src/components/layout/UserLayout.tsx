import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import Backdrop from "../ui/Backdrop";
import Header from "./Header";
import { Box, Container } from "@mui/material";
import { AppBarProvider } from "../../contexts/appBar";

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
    <AppBarProvider>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header />

        <Container
          maxWidth="xl"
          sx={{
            flexGrow: "1",
            paddingY: "36px",
            overflow: "auto",
            scrollbarWidth: "thin", // Use thin scrollbar on browsers that support it
            msOverflowStyle: "none", // Hide scrollbar for IE and Edge
            "&::-webkit-scrollbar": {
              width: "thin",
              display: "none", // Hide scrollbar for WebKit browsers
            },
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </AppBarProvider>
  );
};

export default UserLayout;
