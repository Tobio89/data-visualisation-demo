import { Typography } from "@mui/material";
import { PageContainer } from "../../components/common";

function AboutPage() {
  return (
    <PageContainer>
      <Typography variant="h1">About</Typography>
      <Typography variant="body1">
        Mars Visualiser is a tool for viewing Mars. It combines a high
        resolution map of mars with many layers of data visualisation.
      </Typography>
      <Typography variant="body1">
        It is a portfolio project to demonstrate Deep Zoom-based visualisation,
        in particular, bitmasked tiled image visualisation.
      </Typography>
    </PageContainer>
  );
}

export default AboutPage;
