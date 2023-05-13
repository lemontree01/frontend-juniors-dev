import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const rootEl = document.querySelector("#root");
if (!rootEl) throw new Error("Cannot find root element with that id");
const root = createRoot(rootEl);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.SOCIAL_AUTH_GOOGLE_OAUTH2_KEY ?? ""}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </BrowserRouter>
);
