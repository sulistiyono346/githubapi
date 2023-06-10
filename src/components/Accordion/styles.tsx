import { Accordion, AccordionDetails, Box, styled } from "@mui/material";

export const Container = styled(Accordion)(() => ({
  marginTop: 10,
  marginBottom: 10,
}));

export const AccordionContainer = styled(Accordion)(() => ({
  width: "100%",
}));

export const WapperAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: 2,
  border: "1px solid #303c4d",
  margin: 2,
  borderRadius: 5,
  padding: 0,
}));

export const WrapperAvatar = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 2,
  alignItems: "center",
  wordWrap: "break-word",
  wordBreak: "break-word",
}));

export const WrapperLeftCard = styled(Box)(({ theme }) => ({
  padding: 1,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  background: "#303c4d",
}));

export const WrapperRightCard = styled(Box)(({ theme }) => ({
  padding: 5,
  flex: 10,
  display: "flex",
  flexDirection: "column",
  wordWrap: "break-word",
  wordBreak: "break-word",
  justifyContent: "space-between",
}));

export const WrapperIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: 5,
  gap: 2,
}));

export const WrapperStargazers = styled(Box)(({ theme }) => ({
  padding: 10,
  flex: 1,
  display: "flex",
}));
export const BoxStargazers = styled(Box)(({ theme }) => ({
  padding: 5,
  flex: 1,
  borderRadius: 5,
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  border: "1px solid #303c4d",
  height: 30,
  width: 70,
}));
