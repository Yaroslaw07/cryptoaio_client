import { useState, useEffect } from "react";
import { Card, Button } from "@mui/material";
import useAppBar from "../../hooks/useAppBar";
import TitleStatus from "../../components/scripts/TitleStatus";
import JsonConfig from "../../components/scripts/JsonConfig";
import Logs from "../../components/scripts/Logs";

const script = {
  id: 1,
  name: "Name of script",
  status: "Stopped",
  json: '{"key": "value"}',
  logs: "Log 1\nLog2\nLog3\nLog4\nLog5\n",
};

const ScriptPage = () => {
  const { setTitle: setAppBarTitle } = useAppBar();

  const [title, setTitle] = useState(script.name);
  const [jsonInput, setJsonInput] = useState(script.json);
  const [status, setStatus] = useState(script.status);
  const [logs] = useState<string>(script.logs);

  const [editTitle, setEditTitle] = useState(false);
  const [editJson, setEditJsonInput] = useState(false);

  const saveTitle = () => {
    console.log("Title saved:", title);
    setEditTitle(false);
  };

  const saveJson = () => {
    setEditJsonInput(false); // Disable edit mode after saving
  };

  const handleScriptAction = () => {
    setStatus(status === "Running" ? "Stopped" : "Running");
  };

  useEffect(() => {
    setAppBarTitle("Name of script");
  }, []);

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
        title={title}
        setTitle={setTitle}
        saveTitle={saveTitle}
        status={status}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
      />

      <JsonConfig
        json={jsonInput}
        saveJson={saveJson}
        editJson={editJson}
        setEditJsonInput={setEditJsonInput}
        isEditable={status === "Stopped"}
      />

      <Logs logs={logs} />

      <Button
        variant="contained"
        fullWidth
        sx={{ fontSize: "1rem", fontWeight: "600" }}
        disabled={(status === "Stopped" && editJson) || editTitle}
        onClick={handleScriptAction}
      >
        {status === "Running" ? "Stop script" : "Start script"}
      </Button>
    </Card>
  );
};

export default ScriptPage;
