// App.js
import React, { Component, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { ResultsPage } from "./pages/resultPage";

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/resultsPage">
          <ResultsPage />
        </Route>
      </Switch>
      <footer>Created by Max & Saja {new Date().getFullYear()}</footer>
    </>
  );
}
