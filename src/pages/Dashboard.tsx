import {
  Box,
  Button,
  Grid,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import ScriptCard from "../components/dashboard/GridScriptCard";
import useAppBar from "../hooks/useAppBar";
import { Icons } from "../components/Icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const scripts = [
  {
    id: 1,
    name: "Script 1",
    status: "Running",
  },
  {
    id: 2,
    name: "Script 2",
    status: "Stopped",
  },
  {
    id: 3,
    name: "Script 3",
    status: "Error",
  },
];

export const DashboardPage = () => {
  const { setTitle } = useAppBar();

  const navigate = useNavigate();

  useEffect(() => {
    setTitle("Dashboard");
  }, []);

  const handleNewScript = () => {
    navigate("/scripts/new");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        spacing={2}
        direction="row"
        alignItems={"center"}
        sx={{
          height: "40px",
          width: "100%",

          paddingX: "6px",
        }}
      >
        <OutlinedInput
          id="outlined-search"
          placeholder="Search scripts..."
          startAdornment={
            <InputAdornment position="start">
              <Icons.Search style={{ color: "white" }} />
            </InputAdornment>
          }
          sx={{ flex: 1, height: "95%" }}
        />

        <Button
          variant="contained"
          sx={{
            height: "100%",
            width: "120px",
            padding: "2px",
            paddingLeft: "8px",
            marginBottom: "2px",
          }}
          onClick={handleNewScript}
        >
          <Typography
            sx={{
              fontSize: "0.9rem",
              paddingTop: "0.2rem",
              paddingRight: "0.4rem",
            }}
          >
            Add new
          </Typography>
          <Icons.Plus></Icons.Plus>
        </Button>
      </Stack>

      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "16px",
          width: "102%",
          marginX: "-20px",
        }}
      >
        {scripts.map((script) => (
          <ScriptCard key={script.id} script={script} />
        ))}
      </Grid>
    </Box>
  );
};
