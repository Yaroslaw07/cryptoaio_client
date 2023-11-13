import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  CognitoUserSession,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: import.meta.env.VITE_USER_POOL_ID!,
  ClientId: import.meta.env.VITE_CLIENT_ID!,
};

const userPool = new CognitoUserPool(poolData);

interface UserAttributes {
  email: string;
  nickname: string;
}

export const signUp = async (
  email: string,
  password: string,
  attributes: UserAttributes
): Promise<CognitoUser> => {
  const attributeList = [
    new CognitoUserAttribute({ Name: "email", Value: attributes.email }),
    new CognitoUserAttribute({ Name: "nickname", Value: attributes.nickname }),
  ];

  console.log(email, password, attributes);

  return new Promise((resolve, reject) => {
    userPool.signUp(email, password, attributeList, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result!.user);
      }
    });
  });
};

export const logIn = async (
  email: string,
  password: string
): Promise<CognitoUserSession> => {
  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  });

  const userData = {
    Username: email,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);

  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (session) => {
        resolve(session);
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  });
};

export const getCognitoUserFromSession = (
  session: CognitoUserSession
): CognitoUser | null => {
  const idTokenPayload = session.getIdToken().payload;

  const username = idTokenPayload["cognito:username"];

  const userData = {
    Username: username,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);

  return cognitoUser;
};
