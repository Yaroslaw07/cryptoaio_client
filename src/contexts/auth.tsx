import React, { createContext, useState, useEffect } from "react";
import { AuthUser, getCurrentUser, SignInInput } from "aws-amplify/auth";
import { awsLogIn, awsLogOut, awsSignUp } from "../services/aws-auth";

type AuthStatus = "loading" | "authenticated" | "unauthenticated";

interface AuthContextProps {
  status: AuthStatus;
  user: AuthUser | null;
  logIn: (credentials: SignInInput) => Promise<string | undefined>;
  signUp: (params: SignUpParameters) => Promise<string | undefined>;
  logOut: () => Promise<void>;
}

interface SignUpParameters {
  username: string;
  password?: string;
  email: string;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    setStatus("loading");

    getCurrentUser()
      .then((currentUser) => {
        setStatus("authenticated");
        setUser(currentUser);
      })
      .catch(() => {
        setStatus("unauthenticated");
        setUser(null);
      });
  }, []);

  const logIn = async ({ username, password }: SignInInput) => {
    try {
      const { isSignedIn, nextStep } = await awsLogIn({
        username,
        password,
      });
      setStatus(isSignedIn ? "authenticated" : "unauthenticated");
      return nextStep?.signInStep;
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const signUp = async ({
    username,
    email,
    password = "password",
  }: SignUpParameters) => {
    try {
      const { isSignUpComplete, nextStep } = await awsSignUp({
        email,
        password,
        username,
      });

      console.log(isSignUpComplete, nextStep, password);

      return nextStep?.signUpStep;
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const logOut = async () => {
    try {
      await awsLogOut();
      setStatus("unauthenticated");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const value: AuthContextProps = {
    status,
    user,
    logIn,
    signUp,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
