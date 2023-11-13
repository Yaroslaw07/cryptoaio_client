import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "../../utils/theme";
import { UserProvider } from "../../contexts/user";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <CssBaseline />
        <Outlet />
      </UserProvider>
    </ThemeProvider>
  );
};

export default Layout;
