import { createContext, useEffect, useState } from "react";
import cookies from "js-cookie";

import {
  logIn as AwsLogin,
  signUp as AwsSignup,
  getSessionFromCognitoUser,
} from "../services/aws-cognito";

interface SessionContextProps {
  accessToken: string | null;
  idToken: string | null;
  refreshToken: string | null;
  login: (email: string, password: string) => void;
  signup: (username: string, email: string, password: string) => void;
  logout: () => void;
  status: "loading" | "authenticated" | "unauthenticated";
}

export const SessionContext = createContext<SessionContextProps | undefined>(
  undefined
);

interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "loading" | "authenticated" | "unauthenticated"
  >("loading");

  useEffect(() => {
    const accessToken = cookies.get("accessToken");
    const idToken = cookies.get("idToken");
    const refreshToken = cookies.get("refreshToken");

    if (accessToken && idToken && refreshToken) {
      setAccessToken(accessToken);
      setIdToken(idToken);
      setRefreshToken(refreshToken);
      setStatus("authenticated");
    } else {
      setStatus("unauthenticated");
    }
  }, []);

  const login = async (email: string, password: string) => {
    setStatus("loading");

    try {
      const newSession = await AwsLogin(email, password);

      setAccessToken(newSession.getAccessToken().getJwtToken());
      setIdToken(newSession.getIdToken().getJwtToken());
      setRefreshToken(newSession.getRefreshToken().getToken());

      cookies.set("accessToken", newSession.getAccessToken().getJwtToken(), {
        secure: true,
        sameSite: "strict",
      });
      cookies.set("idToken", newSession.getIdToken().getJwtToken(), {
        secure: true,
        sameSite: "strict",
      });
      cookies.set("refreshToken", newSession.getRefreshToken().getToken(), {
        secure: true,
        sameSite: "strict",
      });

      setStatus("authenticated");
    } catch (error) {
      console.log(error);
      setStatus("unauthenticated");
    }
  };

  const signup = async (username: string, email: string, password: string) => {
    setStatus("loading");

    try {
      const newUser = await AwsSignup(email, password, {
        email,
        nickname: username,
      });

      const newSession = await getSessionFromCognitoUser(newUser);

      setAccessToken(newSession.getAccessToken().getJwtToken());
      setIdToken(newSession.getIdToken().getJwtToken());
      setRefreshToken(newSession.getRefreshToken().getToken());

      cookies.set("accessToken", newSession.getAccessToken().getJwtToken(), {
        secure: true,
        sameSite: "strict",
      });
      cookies.set("idToken", newSession.getIdToken().getJwtToken(), {
        secure: true,
        sameSite: "strict",
      });
      cookies.set("refreshToken", newSession.getRefreshToken().getToken(), {
        secure: true,
        sameSite: "strict",
      });

      setStatus("authenticated");
    } catch (error) {
      console.log(error);
      setStatus("unauthenticated");
    }
  };

  const logout = () => {
    cookies.remove("accessToken");
    cookies.remove("idToken");
    cookies.remove("refreshToken");

    setAccessToken(null);
    setIdToken(null);
    setRefreshToken(null);

    setStatus("unauthenticated");
  };

  return (
    <SessionContext.Provider
      value={{
        accessToken,
        idToken,
        refreshToken,
        status,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
