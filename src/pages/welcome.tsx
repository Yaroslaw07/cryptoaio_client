import { Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Icons } from "../components/Icons";
import Card from "../components/ui/Card";

const welcomeButtonStyle = {
  fontSize: "1.6rem",
  padding: "0.5rem 1.25rem",
  textTransform: "none",
  border: "2px solid",
  borderColor: "primary.main",
  borderRadius: "8px",
};

const WelcomePage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Card>
        <Stack
          spacing={5}
          minHeight={"80vh"}
          alignItems="center"
          justifyContent="center"
          textAlign={"center"}
        >
          <Icons.Logo style={{ fontSize: "120", color: "primary.main" }} />
          <Typography
            variant="h1"
            component="h1"
            sx={{
              lineHeight: "0.9",
              fontWeight: "800",
              marginTop: "0.5rem",
              fontSize: "1",
            }}
          >
            Welcome to CryptoAOI
          </Typography>

          <Stack
            direction={"row"}
            spacing={2}
            sx={{ marginTop: "1rem" }}
            justifyContent="center"
            alignContent="center"
          >
            <Link to={"auth/login"}>
              <Button
                variant="contained"
                color="primary"
                component="button"
                sx={welcomeButtonStyle}
              >
                Log In
              </Button>
            </Link>
            <Link to={"auth/signup"}>
              <Button
                variant="contained"
                component="button"
                sx={{ ...welcomeButtonStyle, background: "#302d2d" }}
              >
                Sign Up
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Card>
    </Container>
  );
};

export default WelcomePage;
