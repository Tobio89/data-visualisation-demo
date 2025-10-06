import { AppBar, Box, styled, Typography } from "@mui/material";
import PageLink from "./PageLink";
import { app_colours } from "../const";

const HeaderSection = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "20px",
});

const HeaderBarContainer = styled(AppBar)({
  backgroundColor: app_colours.onyx,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
  padding: "10px 80px",
});

function HeaderBar() {
  return (
    <HeaderBarContainer position="static">
      <HeaderSection>
        <Typography variant="h6" sx={{ color: app_colours.marsOrange }}>
          Mars Visualiser
        </Typography>
      </HeaderSection>
      <HeaderSection>
        <PageLink to="/" title="Home" />
        <PageLink to="/viewer" title="Viewer" />
        <PageLink to="/about" title="About" />
      </HeaderSection>
    </HeaderBarContainer>
  );
}

export default HeaderBar;
