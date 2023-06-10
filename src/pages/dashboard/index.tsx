import { useState } from "react";
import { Grid } from "@mui/material";

import { AppBar } from "components";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

import { Container } from "./style";

function Dashboard() {
  const [isfirstInitialization, setIsFirstInitialization] =
    useState<boolean>(true);

  return (
    <Container data-testid="dashboard">
      <AppBar />
      <Grid
        container
        spacing={10}
        sx={{
          alignItems: isfirstInitialization ? "center" : "unset",
          minHeight: "75vh",
          paddingTop: { xs: 15, md: 25 },
          paddingBottom: { xs: 5, md: 10 },
          paddingRight: { xs: 3, md: 20 },
          paddingLeft: { xs: 3, md: 20 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Grid item md={5} xs={12}>
          <LeftSection setIsFirstInitialization={setIsFirstInitialization} />
        </Grid>
        <Grid item md={7} xs={12}>
          <RightSection isfirstInitialization={isfirstInitialization} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
