import { Box, Grid, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  padding: 0,
}));

export const WrapperRecently = styled(Box)(({ theme }) => ({
  marginTop: 3,
}));

export const GridFromrecently = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  wordWrap: "break-word",
  wordBreak: "break-word",
}));

export const WrapperFirstInitialization = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: 5,
}));
