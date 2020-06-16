import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { App } from "./App";
import { Auth0Provider } from "./features/common/organisms";
import { AUTH_CONFIG } from "./features/common/auth-config";
import { GraphQlProvider } from "./lib";

const history = createBrowserHistory();

ReactDOM.render(
  <Auth0Provider
    domain={AUTH_CONFIG.domain}
    client_id={AUTH_CONFIG.clientId}
    redirect_uri={AUTH_CONFIG.callbackUrl}
  >
    <GraphQlProvider>
      <Router history={history}>
        <App />
      </Router>
    </GraphQlProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
