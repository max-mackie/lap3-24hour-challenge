// App.js
import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}
