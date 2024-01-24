import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3c634b",
    },
    secondary: {
      main: "#302d2d",
    },
    background: {
      default: "#1c1c1c",
    },
    text: {
      primary: "#ededed",
      disabled: "#ededed",
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
          "&.Mui-disabled": {
            background: "#1c1c1c",
            color: "#ededed",
            border: "1px solid #3c634b",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(35, 33, 33, 0.4)",
          borderEndEndRadius: "8px",
          borderEndStartRadius: "8px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(35, 33, 33, 0.4)",
          boxShadow: `0px 2px 4px #3c634b, 0px -1px 4px #3c634b`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          borderRadius: "16px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #2d2a2a inset",
              WebkitTextFillColor: "#ededed",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#ededed",
          "&.Mui-focused": {
            color: "#3c634b",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderColor: "#ededed",
          "& fieldset": {
            borderColor: "#ededed",
            borderRadius: 8,
          },
          "&:hover fieldset": {
            borderColor: "#3c634b",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#ededed",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          fontFamily: "Roboto, sans-serif",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(148deg, rgba(26,29,27,1) 0%, rgba(27,34,29,1) 18%, rgba(21,26,22,1) 52%, rgba(22,27,23,1) 78%, rgba(29,33,30,1) 100%, rgba(2,0,36,1) 1000%);",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            zIndex: -1,
          },
        },
      },
    },
  },
});

export default theme;
