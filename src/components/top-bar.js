import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import shortifyAddress from "../utils/shortify-address";
import Stack from "@mui/material/Stack";

function TopBar({ onDisconnect, onLogin, address }) {
  console.log(address);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" variant="outlined">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Unb@nk
          </Typography>
          {address ? (
            <Stack direction="row" spacing={1}>
              <Button color="inherit" variant="outlined">
                {shortifyAddress(address)}
              </Button>
              <Button color="inherit" variant="outlined" onClick={onDisconnect}>
                Disconnect
              </Button>
            </Stack>
          ) : (
            <Button color="inherit" variant="outlined" onClick={onLogin}>
              Connect
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default TopBar;
