import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "../../utils/theme";
import { AuthProvider } from "../../contexts/auth";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <Outlet />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Layout;
