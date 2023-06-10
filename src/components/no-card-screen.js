import React, { useState } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCardModal from "../modals/add-card";
import LoadingButton from "@mui/lab/LoadingButton";

function NoCardScreen({ retailAccountAddress, currencies, onCardCreated }) {
  const [addCardModalOpenned, setAddCardModalOpenned] = useState(false);
  const handleAddCardModalOpen = () => {
    setAddCardModalOpenned(true);
  };
  const handleAddCardModalClose = () => {
    setAddCardModalOpenned(false);
  };

  return (
    <Grid
      item
      container
      xs={12}
      md={9}
      direction="column"
      spacing={1}
      sx={{
        // backgroundColor: "#042f22",
        // height: "100vh",
        width: "100%",
        align: "center",
        alignContent: "center",
        paddingTop: "5px",
        px: "15px",
      }}
    >
      <Typography variant="h1" align="center" sx={{ mt: 7, fontSize: "100px" }}>
        😒
      </Typography>
      <Typography variant="h6" align="center" sx={{ m: 3 }}>
        Hey, you've been here for 2 minutes
        <br />
        and haven't created any card yet!
      </Typography>
      <LoadingButton
        loading={addCardModalOpenned}
        onClick={handleAddCardModalOpen}
        variant="outlined"
        color="inherit"
        sx={{}}
      >
        Issue immediately ⚡️
      </LoadingButton>
      <AddCardModal
        onCardCreated={onCardCreated}
        open={addCardModalOpenned}
        handleClose={handleAddCardModalClose}
        currencies={currencies}
        retailAccountAddress={retailAccountAddress}
      />
    </Grid>
  );
}

export default NoCardScreen;
