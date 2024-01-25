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
import { useLoaderData, useNavigate } from "react-router-dom";
import api from "../api";
import { QueryClient } from "@tanstack/react-query";
import scriptInfo from "../types/scriptInfo";

const getAllScripts = () => ({
  queryKey: ["scripts"],
  queryFn: async () => api.get("/scripts"),
});

export const loader = (queryClient: QueryClient) => async () => {
  const query = getAllScripts();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export const DashboardPage = () => {
  const { setTitle } = useAppBar();

  const { data: scripts } = useLoaderData() as { data: scriptInfo[] };

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
          disabled={true}
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
