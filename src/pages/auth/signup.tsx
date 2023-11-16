import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Card from "../../components/ui/Card";
import { Icons } from "../../components/Icons";
import { signUp as AwsSignUp } from "../../services/aws-cognito";
import { useEffect, useState } from "react";
import { useSession } from "../../hooks/useSession";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { status } = useSession();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await AwsSignUp(email, password, {
        email,
        nickname: username,
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (status !== "loading") {
      if (status === "authenticated") {
        window.location.href = "/dashboard";
      }
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
              }}
            >
              <Grid item>
                <Typography variant="body1" sx={{ marginTop: "1px" }}>
                  Already have an account?{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body1">
                  Log In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default SignUp;
