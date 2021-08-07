import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Login } from "../pages/login";
import { Layout } from "../pages/layout";
import { Dashboard } from "../pages/dashboard";

const LoginRoute = () => {
  return <Route component={Login} path="/login" exact />;
};

const RegisterRoute = () => {
  return <Route component={Login} path="/register" exact />;
};

const OtherRoutes = () => {
  return (
    <Layout>
      <Route component={Dashboard} path="/" exact />
      <Route component={Dashboard} path="/home" exact />
    </Layout>
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LoginRoute} path="/(login)" />
        <Route component={RegisterRoute} path="/(register)" />
        <Route component={OtherRoutes} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
