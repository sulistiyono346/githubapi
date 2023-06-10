import { Player } from "@lottiefiles/react-lottie-player";
import { Box } from "@mui/material";
import { Label } from "components/Typography";
import EmptyAnimation from "assets/lottiefiles/empty.json";

const Empty = ({ type }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Player
        src={EmptyAnimation}
        className="player"
        style={{
          height: "180px",
          width: "180px",
          alignContent: "center",
        }}
        loop
        autoplay
      />
      {type === "repo" ? (
        <Label
          sx={{
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          Sorry, we couldn't find the repository.
        </Label>
      ) : (
        <Label
          sx={{
            textAlign: "center",
          }}
        >
          Sorry, we couldn't find the username you were looking for.
          <br />
          Try with another username
        </Label>
      )}
    </Box>
  );
};
export default Empty;
