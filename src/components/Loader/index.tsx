import { Player } from "@lottiefiles/react-lottie-player";
import { Box } from "@mui/material";
import LoadingAnimation from "assets/lottiefiles/loading.json";
import { Label } from "components/Typography";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Player
        src={LoadingAnimation}
        className="player"
        style={{
          height: "180px",
          width: "180px",
          alignContent: "center",
        }}
        loop
        autoplay
      />
      <Label
        sx={{
          textAlign: "center",
        }}
      >
        Loading Please Wait
      </Label>
    </Box>
  );
};
export default Loader;
