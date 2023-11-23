import { useContext } from "react";
import { AppBarContext } from "../contexts/appBar";

export function useAppBar() {
  const context = useContext(AppBarContext);

  if (!context) {
    throw new Error("useAppBarTitle must be used within an AppBarProvider");
  }

  return context;
}

export default useAppBar;
