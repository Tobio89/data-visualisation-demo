import { Box } from "@mui/material";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
      }}
    >
      {children}
    </Box>
  );
};
