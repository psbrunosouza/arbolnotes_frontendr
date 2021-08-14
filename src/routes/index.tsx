import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";

const LoginRoute = () => {
  return <Route component={Login} path="/login" exact />;
};

const RegisterRoute = () => {
  return <Route component={Register} path="/register" exact />;
};

const OtherRoutes = () => {
  return (
    // <Layout>
    //   <Route component={Dashboard} path="/" exact />
    //   <Route component={Dashboard} path="/home" exact />
    // </Layout>
    <></>
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LoginRoute} path="/(login)" />
        <Route component={RegisterRoute} path="/(register)" />
        {/* <Route component={OtherRoutes} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
