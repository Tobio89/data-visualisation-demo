import { Box, Drawer } from "@mui/material";

const SideBar = () => {
  return (
    <Drawer variant="permanent">
      <Box
        sx={{
          width: "180px",
          padding: "8px",
        }}
      >
        SideBar
      </Box>
    </Drawer>
  );
};

export default SideBar;
