import { Typography } from "@mui/material";
import { Link, useLocation } from "react-router";
import { app_colours } from "../const";

export default function PageLink({
  to,
  title,
  children,
}: {
  to: string;
  title?: string;
  children?: React.ReactNode;
}) {
  const isActive = useLocation().pathname === to;

  if (children) {
    return <Link to={to}>{children}</Link>;
  }

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
