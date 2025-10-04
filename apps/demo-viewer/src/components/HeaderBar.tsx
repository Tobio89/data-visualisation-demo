import { AppBar, Typography } from "@mui/material";
import { Link } from "react-router";

function HeaderBar() {
  return (
    <AppBar position="static">
      <Typography variant="h6">Greatest Vis Demo</Typography>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </AppBar>
  );
}

export default HeaderBar;
