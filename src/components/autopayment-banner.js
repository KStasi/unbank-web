import React from "react";
import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

function AutopaymentBanner({ text }) {
  return (
    <Paper
      elevation={0}
      sx={{ px: 2, py: 1, textAlign: "center", border: 0.5 }}
    >
      <Typography variant="h8" component="div">
        {text}
      </Typography>
    </Paper>
  );
}

export default AutopaymentBanner;
