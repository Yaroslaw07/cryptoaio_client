import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#467558",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#1c1c1c",
    },
    text: {
      primary: "#f7f7f7",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
