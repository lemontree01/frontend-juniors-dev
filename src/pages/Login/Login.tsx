import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  console.log(process.env.SOCIAL_AUTH_GOOGLE_OAUTH2_KEY)
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default Login;
