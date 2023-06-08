import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";

function WelcomeHeader({}) {
  return (
    <Hidden smDown>
      <Grid
        lg={2}
        md={6}
        sm={12}
        sx={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translate(-50%, 0%)",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Paper sx={{ width: "100%", margin: "auto", padding: "10px" }}>
          <Typography variant="h4" align="center">
            Welcome to Unb@nk 👋!
          </Typography>
          <div style={{ height: "7px" }} />
          <Typography variant="h5" align="center">
            Select who you are today:
          </Typography>
        </Paper>
      </Grid>
    </Hidden>
  );
}

export default WelcomeHeader;
