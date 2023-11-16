import { signIn, type SignInInput, signUp, signOut } from "aws-amplify/auth";

async function awsLogIn({ username, password }: SignInInput) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
    console.log(isSignedIn, nextStep, "hello");
    return { isSignedIn, nextStep };
  } catch (error) {
    return { error };
  }
}

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
};

async function awsSignUp({ username, password, email }: SignUpParameters) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: email,
      password,
      options: {
        userAttributes: {
          email,
          nickname: username,
        },
        autoSignIn: true,
      },
    });

    console.log(userId);

    return { isSignUpComplete, nextStep };
  } catch (error) {
    return { error };
  }
}

async function awsLogOut() {
  try {
    await signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

export { awsLogIn, awsSignUp, awsLogOut };
