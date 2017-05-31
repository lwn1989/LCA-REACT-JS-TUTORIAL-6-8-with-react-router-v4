import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter } from "react-router-dom";

import Layout from "./pages/Layout.js";

const app = document.getElementById('app');

ReactDOM.render((
// Since no nested route in v4, parent and children need to be written together
// check out Layout.js
  <HashRouter>
    <Route path='/' component={Layout}/>
  </HashRouter>),
app);
