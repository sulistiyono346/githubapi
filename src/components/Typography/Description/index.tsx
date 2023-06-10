import { Typography, styled } from "@mui/material";

const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "28px",
  letterSpacing: "0.15px",
}));

export default Description;
