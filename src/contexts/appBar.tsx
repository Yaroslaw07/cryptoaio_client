import { createContext, useState } from "react";

interface appBarContextProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export const AppBarContext = createContext<appBarContextProps | undefined>(
  undefined
);

interface AppBarProviderProps {
  children: React.ReactNode;
}

export const AppBarProvider: React.FC<AppBarProviderProps> = ({ children }) => {
  const [title, setTitle] = useState<string>("");

  return (
    <AppBarContext.Provider value={{ title, setTitle }}>
      {children}
    </AppBarContext.Provider>
  );
};
