import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { authService } from "./services/auth.service";

import Login from "../pages/login";
import Register from "../pages/register";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}: any): JSX.Element => {
  isAuthenticated = authService();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props}></Component>
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const LoginRoute = () => {
  return <Route component={Login} path="/login" exact />;
};

const RegisterRoute = () => {
  return <Route component={Register} path="/register" exact />;
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LoginRoute} path="/(login)" />
        <Route component={RegisterRoute} path="/(register)" />
        <PrivateRoute
          path="/dashboard"
          exact
          component={() => <h1>teste</h1>}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
