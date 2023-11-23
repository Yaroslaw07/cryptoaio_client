import {
  ButtonBase,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import scriptInfo from "../../types/scriptInfo";
import { FC } from "react";
import { Icons } from "../Icons";

interface ScriptCardProps {
  script: scriptInfo;
}

const GridScriptCard: FC<ScriptCardProps> = ({ script }) => {
  const { id, name, status } = script;

  const statusColor = (() => {
    switch (status) {
      case "Running":
        return "#68aa6a";
      case "Stopped":
        return "#dddc82";
      case "Error":
        return "#cc5757";
      default:
        return "#e0e0e0";
    }
  })();

  const handleMoreOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    console.log("More options of", id);
  };

  return (
    <Grid
      item
      xs={12} // Ensure the grid item takes up the entire width
      sm={6}
      md={4}
      lg={3}
      sx={{
        transition: "transform 0.2s",
        ":hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Card sx={{ height: "96px" }}>
        <Grid container sx={{ height: "100%" }}>
          <Grid xs item>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                sx={{ paddingLeft: "2px" }}
              >
                {name}
              </Typography>
              <Stack direction={"row"} spacing={0.8} alignContent={"center"}>
                <Icons.StatusCircle
                  style={{ color: statusColor, fontSize: "24px" }}
                />
                <Typography sx={{ fontSize: 16, pt: "0.05rem" }}>
                  {status}
                </Typography>
              </Stack>
            </CardContent>
          </Grid>
          <Grid item sx={{ alignSelf: "center", paddingRight: "8px" }}>
            <ButtonBase
              sx={{ borderRadius: "8px" }}
              onClick={handleMoreOptions}
            >
              <Icons.CardOptions sx={{ fontSize: "25px" }} />
            </ButtonBase>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default GridScriptCard;
