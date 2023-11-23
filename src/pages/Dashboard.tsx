import {
  Box,
  Button,
  Grid,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import ScriptCard from "../components/dashboard/ScriptCard";
import useAppBar from "../hooks/useAppBar";
import { Icons } from "../components/Icons";

const scripts = [
  {
    id: 1,
    name: "Script 1",
    status: "Running",
  },
  {
    id: 2,
    name: "Script 2",
    status: "Running",
  },
];

export const DashboardPage = () => {
  const { setTitle } = useAppBar();

  setTitle("Dashboard");

  return (
    <>
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
          sx={{ flex: 1, height: "98%" }}
        />

        <Button
          variant="contained"
          sx={{
            height: "100%",
            width: "120px",
            padding: "2px",
            paddingLeft: "8px",
          }}
        >
          <Typography
            sx={{ fontSize: "0.9rem", paddingTop: "4px", paddingRight: "8px" }}
          >
            Add new
          </Typography>
          <Icons.Plus></Icons.Plus>
        </Button>
      </Stack>

      <Box>
        <Grid container spacing={4} sx={{ marginTop: "8px" }}>
          {scripts.map((script) => (
            <Grid item key={script.id}>
              <ScriptCard script={script} />
            </Grid>
          ))}
          {scripts.map((script) => (
            <Grid item key={script.id}>
              <ScriptCard script={script} />
            </Grid>
          ))}
          {scripts.map((script) => (
            <Grid item key={script.id}>
              <ScriptCard script={script} />
            </Grid>
          ))}
          {scripts.map((script) => (
            <Grid item key={script.id}>
              <ScriptCard script={script} />
            </Grid>
          ))}
          {scripts.map((script) => (
            <Grid item key={script.id}>
              <ScriptCard script={script} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
