import { Box, TextField, Typography } from "@mui/material";
import { FC } from "react";

interface LogsProps {
  logs: string;
}

const Logs: FC<LogsProps> = ({ logs }) => {
  return (
    <Box width={"100%"}>
      <Typography sx={{ fontSize: "24px" }}>Logs</Typography>
      <br></br>
      <TextField
        multiline
        rows={5}
        variant="outlined"
        fullWidth
        value={logs}
        disabled={true}
        sx={{
          backgroundColor: "#1b1b1b",
          "& .MuiOutlinedInput-root.Mui-disabled": {
            "& > fieldset": {
              border: "1px solid #ededed",
            },
          },
        }}
      />
    </Box>
  );
};

export default Logs;
