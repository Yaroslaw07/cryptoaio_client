import { FC, ReactNode } from "react";
import { default as MuiCard } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <MuiCard
      sx={{
        backgroundColor: "#302d2d",
        boxShadow: "0px 4px 16px rgba(0, 255, 128, 0.4)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: "16px",
        minHeight: "200px",
      }}
    >
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
};

export default Card;
