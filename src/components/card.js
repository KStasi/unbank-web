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
import LoadingButton from "@mui/lab/LoadingButton";
import SendModal from "../modals/send";
import postTopUp from "../api/post-top-up";

function Card({
  venomConnect,
  name,
  cardType,
  address,
  balance,
  currencyMetadata,
  dailyLimit,
  monthlyLimit,
  targetAmount,
  amountLeft,
  isActive,
  wallet,
  userAddress,
  retailAccountAddress,
}) {
  const [openSendModal, setOpenSendModal] = React.useState(false);
  const handleSendModalOpen = () => setOpenSendModal(true);
  const handleSendModalClose = () => setOpenSendModal(false);

  // TODO: add loading logic
  const handleTopUp = async () => {
    await postTopUp(address.toString(), currencyMetadata.address);
  };

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
              {name}
            </Typography>
            <Chip label={cardType.toUpperCase()} size="small" />
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
            {cardType.toLowerCase() === "debit" ? (
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
                    {dailyLimit} {currencyMetadata.symbol}
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
                    {monthlyLimit} {currencyMetadata.symbol}
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
                    {targetAmount} {currencyMetadata.symbol}
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
                    {amountLeft}
                    {currencyMetadata.symbol}
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
                {balance} {currencyMetadata.symbol}
              </Typography>
              {balance > 0 ? (
                <Button
                  size="small"
                  variant="contained"
                  color="inherit"
                  disableElevation="true"
                  onClick={handleSendModalOpen}
                >
                  Send 👉
                </Button>
              ) : (
                <LoadingButton
                  size="small"
                  variant="contained"
                  color="inherit"
                  disableElevation="true"
                  onClick={handleTopUp}
                >
                  Top Up 🦄
                </LoadingButton>
              )}
              <SendModal
                open={openSendModal}
                handleClose={handleSendModalClose}
                currencyMetadata={currencyMetadata}
                retailAccountAddress={retailAccountAddress}
                venomConnect={venomConnect}
                userAddress={userAddress}
                cardAddress={address}
              />
            </Stack>
          </div>
        </Stack>
      </Paper>
    </Badge>
  );
}

export default Card;
