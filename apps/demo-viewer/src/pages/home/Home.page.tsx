import { Box, Typography } from "@mui/material";
import { PageContainer } from "../../components/common";

export default function HomePage() {
  return (
    <PageContainer>
      <Typography variant="h1">Home</Typography>
      <Box>
        <Typography variant="body1" sx={{ textAlign: "left" }}>
          Welcome to the Mars Visualiser. This is a tool for visualising Mars.
          <br />
          It&apos;s a portfolio project to demonstrate my skills in React,
          TypeScript, and other technologies.
          <br />
          It features a range of visualisation techniques.
        </Typography>
      </Box>
    </PageContainer>
  );
}
