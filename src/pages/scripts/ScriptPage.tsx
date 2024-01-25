import { useState, useEffect } from "react";
import { Card, Button } from "@mui/material";
import useAppBar from "../../hooks/useAppBar";
import TitleStatus from "../../components/scripts/TitleStatus";
import JsonConfig from "../../components/scripts/JsonConfig";
import Logs from "../../components/scripts/Logs";
import api from "../../api";
import { QueryClient } from "@tanstack/react-query";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import Script from "../../types/script";

const getScriptById = (id: number) => ({
  queryKey: ["scripts", id],
  queryFn: async () => api.get("/scripts/?id=" + id),
});

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: { scriptId: number } }) => {
    console.log(params);
    const query = getScriptById(params.scriptId);

    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

const updateScript = async (
  id: number,
  newScript: Script
): Promise<AxiosResponse<Script>> => {
  return api.put(`/scripts/${id}`, newScript);
};

export const ScriptPage = () => {
  const navigate = useNavigate();
  const { data } = useLoaderData() as AxiosResponse;

  const [script, setScript] = useState<Script>(data[0]);

  const { setTitle: setAppBarTitle } = useAppBar();

  const [editName, setEditName] = useState(false);
  const [editJson, setEditJsonInput] = useState(false);

  const saveName = async (name: string) => {
    const updatedScript = await updateScript(script.id, { ...script, name });
    setEditName(false);
    setScript(updatedScript.data);
  };

  const saveJson = async (json: string) => {
    const config = JSON.parse(json);
    const updatedScript = await updateScript(script.id, { ...script, config });
    setEditJsonInput(false);
    setScript(updatedScript.data);
  };

  const handleScriptAction = async () => {
    const newScipt = {
      ...script,
      status: script.status === "Running" ? "Stopped" : "Running",
    };
    const updatedScript = await updateScript(script.id, newScipt);
    setScript(updatedScript.data);
  };

  const json = JSON.stringify(script.config, null, 2);

  useEffect(() => {
    setAppBarTitle(script?.name);
  }, [script?.name]);

  if (data.length === 0) {
    navigate("/dashboard");
    return <div></div>;
  }

  return (
    <Card
      sx={{
        alignItems: "start",
        paddingX: "24px",
        paddingY: "16px",
        gap: "50px",
        maxWidth: "650px",
        margin: "auto",
      }}
    >
      <TitleStatus
        title={script.name}
        saveTitle={saveName}
        status={script.status}
        editTitle={editName}
        setEditTitle={setEditName}
      />

      <JsonConfig
        json={json}
        saveJson={saveJson}
        editJson={editJson}
        setEditJsonInput={setEditJsonInput}
        isEditable={script.status === "Stopped"}
      />

      <Logs logs={script.logs} />

      <Button
        variant="contained"
        fullWidth
        sx={{ fontSize: "1rem", fontWeight: "600" }}
        disabled={script.status === "Stopped" && editJson}
        onClick={handleScriptAction}
      >
        {script.status === "Running" ? "Stop script" : "Start script"}
      </Button>
    </Card>
  );
};
