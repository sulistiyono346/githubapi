import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Tooltip,
} from "@mui/material";

import Logo from "assets/img/github-icon.png";
import theme from "assets/theme";

const AppBarComponent = () => {
  let navigate = useNavigate();
  return (
    <AppBar position="fixed" sx={{ background: theme.palette.primary.main }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            onClick={() => navigate("/")}
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            GitHub
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="github-icon"
                  src={Logo}
                  sx={{ background: theme.palette.background.default }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarComponent;
