import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
import Coin from "routes/Coin";
import Coins from "routes/Coins";

const Router = () => {
  return (
    <BrowserRouter basename="coin">
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
