import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#467558",
    },
    secondary: {
      main: "#302d2d",
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 16px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #424040 inset",
              WebkitTextFillColor: "#f7f7f7",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#f7f7f7",
          "&.Mui-focused": {
            color: "#467558",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderColor: "#f7f7f7",
          "& fieldset": {
            borderColor: "#f7f7f7",
            borderRadius: 8,
          },
          "&:hover fieldset": {
            borderColor: "#467558",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#0000",
          },
        },
      },
    },
  },
});

export default theme;

// sx={{
//                 "& .MuiInputLabel-root": {
//                   color: "green", // Default color
//                   "&.Mui-focused": {
//                     color: "blue", // Color when focused
//                   },
//                 },
//                 "& .MuiOutlinedInput-root": {
//                   borderColor: "white", // Change border color
//                   "& fieldset": {
//                     borderColor: "white", // Change border color for the focused state
//                   },
//                 },
//               }}
