import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "../../utils/theme";
import { SessionProvider } from "../../contexts/session";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <CssBaseline />
        <Outlet />
      </SessionProvider>
    </ThemeProvider>
  );
};

export default Layout;
