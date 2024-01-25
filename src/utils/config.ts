const config = {
  Cognito: {
    //  Amazon Cognito User Pool ID
    userPoolId: import.meta.env.CAIO_COGNITO_USER_POOL_ID!,
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolClientId: import.meta.env.CAIO_COGNITO_USER_POOL_CLIENT_ID!,
  },
  API: {
    url: import.meta.env.CAIO_API_URL!,
  },
};

export default config;
