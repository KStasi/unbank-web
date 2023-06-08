import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";

function WelcomeContainer({ children }) {
  return (
    <Grid
      container
      spacing={0}
      component="main"
      sx={{
        backgroundColor: "#fafafa",
        display: "flex",
        height: "100vh",
      }}
    >
      {children}
    </Grid>
  );
}

export default WelcomeContainer;
