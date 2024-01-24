import { Button, Stack, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";

interface NameStepProps {
  basicName: string;
  onSubmit: (title: string) => void;
}

const NameStep: FC<NameStepProps> = ({ basicName, onSubmit }) => {
  const [name, setName] = useState(basicName);

  const handleSubmit = () => {
    if (name === "") return;
    onSubmit(name);
  };

  return (
    <Stack direction={"column"} spacing={1} sx={{ width: "100%" }}>
      <Typography variant="h6">Step 1: Name Your Script</Typography>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ width: "100%" }}
        inputProps={{
          style: {
            height: "18px",
            fontSize: "1.2rem",
            display: "flex",
          },
        }}
      ></TextField>

      <Button disabled={name === ""} variant="contained" onClick={handleSubmit}>
        Next
      </Button>
    </Stack>
  );
};

export default NameStep;
