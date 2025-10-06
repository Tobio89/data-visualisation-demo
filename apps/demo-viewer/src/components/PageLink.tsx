import { Typography } from "@mui/material";
import { Link, useLocation } from "react-router";
import { app_colours } from "../const";

export default function PageLink({ to, title }: { to: string; title: string }) {
  const isActive = useLocation().pathname === to;

  return (
    <Link to={to}>
      <Typography
        variant="body1"
        sx={{
          textDecoration: "none",
          color: isActive ? app_colours.hiGreen : app_colours.marsOrange,
        }}
      >
        {title}
      </Typography>
    </Link>
  );
}
