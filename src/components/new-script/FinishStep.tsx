import { Button, Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";

interface FinishStepProps {
  name: string;
  json: string;

  onBack: () => void;
  onSubmit: () => void;
}

const FinishStep: FC<FinishStepProps> = ({ name, json, onSubmit, onBack }) => {
  return (
    <Stack direction={"column"} spacing={2} sx={{ width: "100%" }}>
      <Typography variant="h6">Step 3: Finish Process with Review</Typography>

      <Typography variant="h4">Name:{name}</Typography>

      <TextField
        id="outlined-multiline-static"
        multiline
        rows={5}
        value={json}
        disabled={true}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root.Mui-disabled": {
            "& > fieldset": {
              border: "1px solid #ededed",
            },
          },
        }}
      />
      <Stack direction={"row"} spacing={1} sx={{ width: "100%" }}>
        <Button fullWidth variant="outlined" onClick={onBack}>
          Back
        </Button>
        <Button fullWidth variant="contained" onClick={onSubmit}>
          Next
        </Button>
      </Stack>
    </Stack>
  );
};

export default FinishStep;
