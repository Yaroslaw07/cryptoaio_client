import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Card,
  Typography,
  CardContent,
} from "@mui/material";
import { Icons } from "../../components/Icons";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Link from "../../components/Link";

const SignUp = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await signUp({ username, email, password });

    navigate("/login");
  };

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
        <CardContent>
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
              Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Your username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
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
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0px 8px",
                }}
              >
                <Grid item>
                  <Typography variant="body1" sx={{ marginTop: "1px" }}>
                    Already have an account?{" "}
                  </Typography>
                </Grid>
                <Grid item sx={{ marginRight: "2px" }}>
                  <Link href="/login" variant="body1">
                    Log In
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignUp;
