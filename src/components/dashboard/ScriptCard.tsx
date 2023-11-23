import { Button, CardActions, CardContent, Typography } from "@mui/material";
import scriptInfo from "../../types/scriptInfo";
import { FC } from "react";
import GridScriptCard from "./GridScriptCard";

interface ScriptCardProps {
  script: scriptInfo;
}

const ScriptCard: FC<ScriptCardProps> = ({ script }) => {
  const { name, status } = script;

  return (
    <GridScriptCard>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          {status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </GridScriptCard>
  );
};

export default ScriptCard;
