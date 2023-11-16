import { useContext } from "react";
import { SessionContext } from "../contexts/session";

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
