import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}));
