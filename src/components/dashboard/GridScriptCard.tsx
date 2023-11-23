import { Card, Grid } from "@mui/material";
import { FC } from "react";

interface GridScriptCardProps {
  children: React.ReactNode;
}

const GridScriptCard: FC<GridScriptCardProps> = ({ children }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{ minHeight: "160px" }}>
      <Card
        sx={{
          minWidth: "237px",
          transition: "transform 0.2s",
          ":hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        {children}
      </Card>
    </Grid>
  );
};

export default GridScriptCard;
