import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
}));

export const WrapperFirstInitialization = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const WrapperAccordion = styled(Box)(({ theme }) => ({
  minHeight: "100%",
}));
