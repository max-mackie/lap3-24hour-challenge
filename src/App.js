// App.js
import React, { Component, useEffect } from "react";

export default function () {
    
    return (
      <>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route path="/resultsPage"><ResultsPage /></Route>
        </Switch>
        <footer>
          Created by Max & Saja {new Date().getFullYear()}
        </footer>
      </>
    );
  }

