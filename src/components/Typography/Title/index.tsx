import { Typography, styled } from "@mui/material";

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "28px",
  letterSpacing: "0.15px",
}));

export default Title;
