import { CognitoUserSession } from "amazon-cognito-identity-js";
import { createContext, useState } from "react";

interface UserContextProps {
  session: CognitoUserSession | null;
  loadUserData: () => void;
  saveUser: (session: CognitoUserSession) => void;
  status: "loading" | "authenticated" | "unauthenticated";
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [session, setSession] = useState<CognitoUserSession | null>(null);
  const [status, setStatus] = useState<
    "loading" | "authenticated" | "unauthenticated"
  >("loading");

  const loadUserData = async () => {
    if (session !== null) {
      setStatus("authenticated");
    } else {
      setStatus("unauthenticated");
      console.log("here");
    }
  };

  const saveUser = async (newSession: CognitoUserSession) => {
    setSession(newSession);

    setStatus("authenticated");
  };

  return (
    <UserContext.Provider value={{ session, status, loadUserData, saveUser }}>
      {children}
    </UserContext.Provider>
  );
};
