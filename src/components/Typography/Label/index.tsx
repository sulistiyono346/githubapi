import { Typography, styled } from "@mui/material";

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.main,
  fontWeight: 500,
  fontSize: 12,
  lineHeight: "28px",
  letterSpacing: "0.15px",
}));

export default Label;
