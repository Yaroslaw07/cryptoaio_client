import {
  AppBar,
  Box,
  Button,
  Skeleton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Icons } from "../Icons";
import useAuth from "../../hooks/useAuth";
import useAppBar from "../../hooks/useAppBar";

const Header = () => {
  const { logOut } = useAuth();
  const { title } = useAppBar();

  return (
    <AppBar position="static" sx={{ flexGrow: "0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <>
          <Icons.Logo
            style={{
              fontSize: "45",
              color: "primary.main",
              fontWeight: "600",
            }}
          />
          <Box
            sx={{
              marginLeft: "15px",
              fontWeight: "600",
              flexGrow: 1,

              marginTop: "5px",
            }}
          >
            {title === "" ? (
              <Skeleton variant="text" width="100px" />
            ) : (
              <Typography variant="h5" component="div" sx={{}}>
                {title}
              </Typography>
            )}
          </Box>
        </>

        <Button
          color="primary"
          variant="contained"
          size="medium"
          onClick={logOut}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
