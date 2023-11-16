import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Link from "../../components/Link";
import Card from "../../components/ui/Card";
import { Icons } from "../../components/Icons";
import { useEffect, useState } from "react";
import { useSession } from "../../hooks/useSession";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { status, login } = useSession();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login(email, password);
  };

  useEffect(() => {
    if (status === "authenticated") {
      navigate("/dashboard");
    }
  }, [status]);

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Card>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icons.Logo
            style={{
              fontSize: "100",
              color: "primary.main",
              marginBottom: "20px",
            }}
          />
          <Typography component="h1" variant="h4" sx={{ fontWeight: "600" }}>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Grid item>
                <Typography variant="body1" sx={{ marginTop: "1px" }}>
                  Don't have an account?{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body1">
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default LoginPage;
