import React, { useEffect, useState } from "react";
import { Stack, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "../components/card";
import AddCardModal from "../modals/add-card";
import useCurrencies from "../hooks/use-currencies";
import LoadingButton from "@mui/lab/LoadingButton";

function CardsScreen({ cards, venomConnect }) {
  const [addCardModalOpenned, setAddCardModalOpenned] = useState(false);
  const handleAddCardModalOpen = () => {
    setAddCardModalOpenned(true);
  };
  const handleAddCardModalClose = () => {
    setAddCardModalOpenned(false);
  };

  const { currencies } = useCurrencies(venomConnect);
  return (
    <Grid
      item
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
      <Typography variant="h6" align="left" sx={{ my: 1 }}>
        Cards
      </Typography>
      <Grid
        container
        item
        spacing={1}
        xs={12}
        md={8}
        sx={{
          width: "inherit",
        }}
      >
        {cards.map((card, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={4}
            spacing={1}
            sx={{}}
          >
            <Card {...card} />
          </Grid>
        ))}
      </Grid>
      <br />
      <Grid item spacing={1} xs={12} md={8} sx={{}}>
        <LoadingButton
          variant="outlined"
          color="inherit"
          sx={{ width: "100%" }}
          loading={addCardModalOpenned}
          onClick={handleAddCardModalOpen}
        >
          Add Card 🤑
        </LoadingButton>
        <AddCardModal
          open={addCardModalOpenned}
          handleClose={handleAddCardModalClose}
          currencies={currencies}
        />
      </Grid>
    </Grid>
  );
}

export default CardsScreen;
