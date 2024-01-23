import { Amplify } from "aws-amplify";
import config from "./utils/config";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: config.Cognito.userPoolId,
      userPoolClientId: config.Cognito.userPoolClientId,
    },
  },
  API: {
    REST: {},
  },
});

export default Amplify.getConfig();
