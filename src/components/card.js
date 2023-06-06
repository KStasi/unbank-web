import React from "react";
import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import shortifyAddress from "../utils/shortify-address";

function Card({
  id,
  type,
  address,
  balance,
  symbol,
  dailyLimit,
  monthlyLimit,
  targetAmount,
  isActive,
  emoji,
}) {
  return (
    <Badge
      badgeContent={""}
      variant="dot"
      color={isActive ? "success" : "error"}
    >
      <Paper
        elevation={0}
        sx={{
          px: 3,
          py: 2,
          textAlign: "left",
          minWidth: "250px",
          border: 0.5,
        }}
      >
        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography variant="subtitle1" component="div">
              Card {id}
            </Typography>
            <Chip label={type.toUpperCase()} size="small" />
          </Stack>
          <div>
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Typography variant="subtitle2" component="div">
                Address:
              </Typography>
              <Typography variant="subtitle2" component="div">
                {shortifyAddress(address)}
              </Typography>
            </Stack>
            {type.toLowerCase() === "debit" ? (
              <>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle2" component="div">
                    Daily Limit:
                  </Typography>
                  <Typography variant="subtitle2" component="div">
                    {dailyLimit} {symbol}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle2" component="div">
                    Monthly Limit:
                  </Typography>
                  <Typography variant="subtitle2" component="div">
                    {monthlyLimit} {symbol}
                  </Typography>
                </Stack>
              </>
            ) : (
              <>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle2" component="div">
                    Target Amount:
                  </Typography>
                  <Typography variant="subtitle2" component="div">
                    {targetAmount} {symbol}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle2" component="div">
                    Left To Save:
                  </Typography>
                  <Typography variant="subtitle2" component="div">
                    {balance < targetAmount ? targetAmount - balance : 0}{" "}
                    {symbol}
                  </Typography>
                </Stack>
              </>
            )}
          </div>
          <Divider />
          <div>
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {balance} {symbol}
              </Typography>
              <Button
                size="small"
                variant="contained"
                color="inherit"
                disableElevation="true"
              >
                Send 👉
              </Button>
              {/* <IconButton aria-label="send" size="small">
                <NorthEastIcon fontSize="small" />
              </IconButton>  */}
            </Stack>
          </div>
        </Stack>
      </Paper>
    </Badge>
  );
}

export default Card;
