import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function WelcomeHeader({}) {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        // justifyContent: "center",
        alignItems: "center",
        alignContent: "center",

        padding: "30px 0",
      }}
    >
      <Paper sx={{ width: "40%", margin: "auto", padding: "10px" }}>
        <Typography variant="h3" align="center">
          Welcome to Unb@nk 👋!
        </Typography>
        <div style={{ height: "7px" }} />
        <Typography variant="h5" align="center">
          Select who you are today:
        </Typography>
      </Paper>
    </Box>
  );
}

export default WelcomeHeader;
