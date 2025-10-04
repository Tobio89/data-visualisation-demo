import { Box, Typography } from "@mui/material";

const SideBar = () => {
  return (
    <Box
      sx={{
        width: "180px",
        padding: "8px",
        border: "1px solid red",
      }}
    >
      <Typography variant="h6">SideBar</Typography>
    </Box>
  );
};

export default SideBar;
