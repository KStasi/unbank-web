import React from "react";
import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import shortifyAddress from "../utils/shortify-address";

function Autopayment({ id, type, from, to, amount, symbol, period }) {
  return (
    <Paper
      elevation={0}
      sx={{ px: 2, py: 1, textAlign: "left", minWidth: "250px", border: 0.5 }}
    >
      <Stack direction="column" spacing={1}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="subtitle1" component="div">
            Autopayment {id}
          </Typography>
          {/* <Button
            size="small"
            variant="contained"
            color="inherit"
            disableElevation="true"
          >
            Cancel
          </Button> */}
          <IconButton aria-label="send" size="small">
            <ClearIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Stack direction="column" spacing={0}>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography variant="subtitle2" component="div">
              From:
            </Typography>
            <Typography variant="subtitle2" component="div">
              {from}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography variant="subtitle2" component="div">
              To:
            </Typography>
            <Typography variant="subtitle2" component="div">
              {shortifyAddress(to)}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography variant="subtitle2" component="div">
              Amount:
            </Typography>
            <Typography variant="subtitle2" component="div">
              {amount} {symbol} / {period}
            </Typography>
          </Stack>
        </Stack>
        {/* <Stack direction="row" spacing={2} justifyContent="space-between">
          <Button
            size="small"
            variant="contained"
            color="inherit"
            disableElevation="true"
          >
            Cancel
          </Button>
        </Stack> */}
      </Stack>
    </Paper>
  );
}

export default Autopayment;
