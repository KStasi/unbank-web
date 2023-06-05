import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function WelcomeContainer({ children }) {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#fafafa",
        // flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        // display: "flex",
      }}
    >
      {children}
    </Box>
  );
}

export default WelcomeContainer;
