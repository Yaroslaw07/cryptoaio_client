import { Amplify } from "aws-amplify";
import config from "./utils/config";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: config.Cognito.userPoolId,
      userPoolClientId: config.Cognito.userPoolClientId,
    },
  },
});

// You can get the current config object
export default Amplify.getConfig();
