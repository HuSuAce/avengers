/*
 * @Descripttion: 
 * @version: 
 * @Author: Piers
 * @Date: 2021-04-10 23:43:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-27 17:35:48
 */
import React from "react";
import "./App.css";
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";
import { ErrorBoundary } from "components/error-boundary";
import { FullPageErrorFallback } from "components/lib";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      {/* <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary> */}
      jira app
    </div>
  );
}

export default App;
