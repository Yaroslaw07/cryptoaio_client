import {
  Button,
  Container,
  Stack,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { Icons } from "../components/Icons";
import Link from "../components/Link";

const welcomeButtonStyle = {
  fontSize: "1.6rem",
  padding: "0.5rem 1.25rem",
  textTransform: "none",
  border: "2px solid",
  borderColor: "primary.main",
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
        <CardContent>
          <Stack
            spacing={5}
            minHeight={"80vh"}
            alignItems="center"
            justifyContent="center"
            textAlign={"center"}
          >
            <Icons.Logo style={{ fontSize: "120" }} />
            <Typography
              variant="h1"
              component="h1"
              sx={{
                lineHeight: "0.9",
                fontWeight: "600",
                marginTop: "0.5rem",
                fontSize: "1",
              }}
            >
              Welcome to CryptoAOI
            </Typography>

            <Stack
              direction={"row"}
              spacing={2}
              sx={{ marginTop: "400px" }}
              justifyContent="center"
              alignContent="center"
            >
              <Link href={"login"}>
                <Button
                  variant="contained"
                  color="primary"
                  component="button"
                  sx={welcomeButtonStyle}
                >
                  Log In
                </Button>
              </Link>
              <Link href={"signup"}>
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
        </CardContent>
      </Card>
    </Container>
  );
};

export default WelcomePage;
