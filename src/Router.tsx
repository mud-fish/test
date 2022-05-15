import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Coin from "routes/Coin";
import Coins from "routes/Coins";

const Router = () => {
  return (
    <BrowserRouter basename="coin">
      <Switch>
        <Route exact path="/">
          <Coins />
        </Route>
        <Route exact path="/:coinId">
          <Coin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
