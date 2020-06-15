import React, { useState, useEffect, useContext } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";
import Auth0Client from "@auth0/auth0-spa-js/dist/typings/Auth0Client";

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext<Auth0Context | null>(null);
export const useAuth0 = () => useContext(Auth0Context)!;

export const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}:Auth0ProviderProps):React.ReactElement => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [auth0Client, setAuth0] = useState<Auth0Client>();
  const [idToken, setIdToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes("code=")) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const idTokenClaims = await auth0FromHook.getIdTokenClaims();        
        setIdToken(idTokenClaims.__raw);
      }

      setLoading(false)
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        loginWithRedirect: () => auth0Client!.loginWithRedirect(),
        logout: () => auth0Client!.logout(),
        idToken,
        loading
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};

interface Auth0ProviderProps {
    children: React.ReactNode,
    onRedirectCallback?: (result: any) => void,
    domain: string,
    client_id: string,
    redirect_uri: string,
}

interface Auth0Context {
    isAuthenticated: boolean;
    loginWithRedirect(): Promise<void>;
    logout(): void;
    idToken: string;
    loading: boolean;
  }