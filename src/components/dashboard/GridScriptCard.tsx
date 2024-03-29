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
import { useNavigate } from "react-router-dom";
import { getStatusColor } from "../../utils/status-diplaying";

interface ScriptCardProps {
  script: scriptInfo;
}

const GridScriptCard: FC<ScriptCardProps> = ({ script }) => {
  const { id, name, status } = script;

  const navigate = useNavigate();

  const handleMoreOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    console.log("More options of", id);
  };

  const handleScriptClick = () => {
    navigate("/scripts/" + id);
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        transition: "transform 0.2s",
        ":hover": {
          transform: "scale(1.02)",
        },
      }}
      onClick={() => handleScriptClick()}
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
                  style={{ color: getStatusColor(status), fontSize: "24px" }}
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
              disableRipple
            >
              <Icons.CardOptions sx={{ mt: "-10px", fontSize: "25px" }} />
            </ButtonBase>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default GridScriptCard;
