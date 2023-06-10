import { Player } from "@lottiefiles/react-lottie-player";
import { Grid } from "@mui/material";
import { AppBar } from "components";
import { Container } from "pages/dashboard/style";
import NotFound404 from "assets/lottiefiles/page-not-found-404.json";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container>
      <AppBar />

      <Grid
        container
        spacing={10}
        sx={{
          position: "fixed",
          alignItems: "center",
          minHeight: "50vh",
          padding: 20,
        }}
      >
        <Player
          src={NotFound404}
          className="player"
          // style={{
          //   height: "180px",
          //   width: "180px",
          //   alignContent: "center",
          // }}
          loop
          autoplay
        />
        <Link to="/">Go Home</Link>
      </Grid>
    </Container>
  );
}

export default NotFound;
