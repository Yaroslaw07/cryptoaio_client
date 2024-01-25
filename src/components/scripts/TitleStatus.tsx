import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { getStatusColor } from "../../utils/status-diplaying";
import { Icons } from "../Icons";

interface TitleStatusProps {
  title: string;
  saveTitle: (name: string) => void;
  status: string;
  editTitle: boolean;
  setEditTitle: (editTitle: boolean) => void;
}

const TitleStatus: FC<TitleStatusProps> = ({
  title,
  saveTitle,
  status,
  editTitle,
  setEditTitle,
}) => {
  const [titleInput, setTitleInput] = useState(title);

  const handleNameSaving = () => {
    if (titleInput === "") return;
    saveTitle(titleInput);
  };

  return (
    <Box width={"100%"}>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <TextField
          variant="outlined"
          value={titleInput}
          autoFocus
          size="medium"
          onChange={(e) => setTitleInput(e.target.value)}
          sx={{
            height: "60px",
            width: "70%",
            fontSize: "1.1rem",
            "& .MuiOutlinedInput-root.Mui-disabled": {
              "& > fieldset": {
                border: "1px solid transparent",
              },
            },
          }}
          disabled={!editTitle}
          inputProps={{
            style: {
              height: "30px",
              fontSize: "2.2rem",
              display: "flex",
              paddingLeft: !editTitle ? "0px" : "8px",
            },
          }}
        />

        <Box mb={"8px"}>
          {!editTitle ? (
            <Button variant="contained" onClick={() => setEditTitle(true)}>
              Edit title
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNameSaving}
              disabled={titleInput === ""}
            >
              Save title
            </Button>
          )}
        </Box>
      </Box>

      <Stack
        direction={"row"}
        spacing={1}
        alignContent={"center"}
        alignItems={"center"}
        sx={{ marginTop: "8px" }}
      >
        <Icons.StatusCircle
          style={{ color: getStatusColor(status), fontSize: "24px" }}
        />
        <Typography sx={{ fontSize: 20 }}>{status}</Typography>
      </Stack>
    </Box>
  );
};

export default TitleStatus;
