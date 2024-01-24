import { Button, Stack, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import isValidJson from "../../utils/jsonChecker";

interface JsonStepProps {
  basicJson: string;
  onSubmit: (json: string) => void;
  onBack: () => void;
}

const JsonStep: FC<JsonStepProps> = ({ basicJson, onSubmit, onBack }) => {
  const [jsonInput, setJsonInput] = useState(basicJson);
  const [error, setError] = useState("");

  const handleJsonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJsonInput(event.target.value);
  };

  const handleJsonSubmit = () => {
    if (jsonInput === "" || jsonInput === "{}" || !isValidJson(jsonInput)) {
      setError("Invalid JSON");
      return;
    } else {
      setError("");
      onSubmit(jsonInput);
    }
  };

  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      spacing={1}
      sx={{ width: "100%" }}
    >
      <Typography variant="h6">Step 2:Type Config for script </Typography>
      <TextField
        id="outlined-multiline-static"
        sx={{ width: "100%" }}
        multiline
        rows={5}
        value={jsonInput}
        onChange={handleJsonChange}
        error={error !== ""}
        helperText={error}
      />
      <Stack direction={"row"} spacing={1} sx={{ width: "100%" }}>
        <Button fullWidth variant="outlined" onClick={onBack}>
          Back
        </Button>
        <Button
          fullWidth
          disabled={jsonInput === ""}
          variant="contained"
          onClick={handleJsonSubmit}
        >
          Finish
        </Button>
      </Stack>
    </Stack>
  );
};

export default JsonStep;
