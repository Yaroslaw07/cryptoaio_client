import { useState, useEffect } from "react";
import { Card, Button } from "@mui/material";
import useAppBar from "../../hooks/useAppBar";
import TitleStatus from "../../components/scripts/TitleStatus";
import JsonConfig from "../../components/scripts/JsonConfig";
import Logs from "../../components/scripts/Logs";

let script = {
  id: 1,
  name: "Name of script",
  status: "Stopped",
  json: '{"key": "value"}',
  logs: "Log 1\nLog2\nLog3\nLog4\nLog5\n",
};

const ScriptPage = () => {
  const { setTitle: setAppBarTitle } = useAppBar();

  const [status, setStatus] = useState(script.status);

  const [editName, setEditName] = useState(false);
  const [editJson, setEditJsonInput] = useState(false);

  const saveName = (name: string) => {
    setEditName(false);
    script = { ...script, name: name };
  };

  const saveJson = (json: string) => {
    setEditJsonInput(false);
    script = { ...script, json: json };
  };

  const handleScriptAction = () => {
    setStatus(status === "Running" ? "Stopped" : "Running");
  };

  useEffect(() => {
    setAppBarTitle(script.name);
  }, [script.name]);

  return (
    <Card
      sx={{
        alignItems: "start",
        paddingX: "24px",
        paddingY: "16px",
        gap: "50px",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <TitleStatus
        title={script.name}
        saveTitle={saveName}
        status={status}
        editTitle={editName}
        setEditTitle={setEditName}
      />

      <JsonConfig
        json={script.json}
        saveJson={saveJson}
        editJson={editJson}
        setEditJsonInput={setEditJsonInput}
        isEditable={status === "Stopped"}
      />

      <Logs logs={script.logs} />

      <Button
        variant="contained"
        fullWidth
        sx={{ fontSize: "1rem", fontWeight: "600" }}
        disabled={status === "Stopped" && editJson}
        onClick={handleScriptAction}
      >
        {status === "Running" ? "Stop script" : "Start script"}
      </Button>
    </Card>
  );
};

export default ScriptPage;
