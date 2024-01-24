import { Box, Button, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import isValidJson from "../../utils/jsonChecker";

interface JsonConfigProps {
  json: string;
  saveJson: (json: string) => void;
  editJson: boolean;
  setEditJsonInput: (editJson: boolean) => void;
  isEditable: boolean;
}

const JsonConfig: FC<JsonConfigProps> = ({
  json,
  saveJson,
  editJson,
  setEditJsonInput,
  isEditable,
}) => {
  const [jsonInput, setJsonInput] = useState(json);
  const [error, setError] = useState("");

  const handleSavingJson = () => {
    if (jsonInput === "" || jsonInput === "{}" || !isValidJson(jsonInput)) {
      setError("Invalid JSON");
      return;
    } else {
      setError("");
      saveJson(jsonInput);
    }
  };

  return (
    <Box width={"100%"}>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          gap: "8px",
        }}
      >
        <Typography sx={{ fontSize: "24px" }}>Params</Typography>
        <Button
          variant="contained"
          color="primary"
          disabled={!isEditable}
          onClick={editJson ? handleSavingJson : () => setEditJsonInput(true)}
        >
          {editJson ? "Save JSON" : "Edit JSON"}
        </Button>
      </Box>
      <br></br>
      <TextField
        multiline
        rows={5}
        variant="outlined"
        fullWidth
        value={jsonInput}
        disabled={!editJson}
        onChange={(e) => setJsonInput(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root.Mui-disabled": {
            "& > fieldset": {
              border: "1px solid #ededed",
            },
          },
        }}
        error={error !== ""}
        helperText={error}
      />
    </Box>
  );
};

export default JsonConfig;
