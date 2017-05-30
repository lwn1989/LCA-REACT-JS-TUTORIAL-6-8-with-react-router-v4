import React from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import Featured from "./Featured.js";
import Archives from "./Archives.js";
import Settings from "./Settings.js";

import Bootstrap from "../vendor/bootstrap-without-jquery.js"

export default class Layout extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>KillerNews.net</h1>
        <div>
          <Switch>
          <Route path='/archives/:article' component={Archives} />
          <Route path='/archives' component={Archives} />
          </Switch>
          <Route path='/settings' component={Settings} />
          <Route exact path='/' component={Featured} />
        </div>
        <div>
          <NavLink to="/archives" activeClassName="test"><button className="btn btn-danger">archives</button></NavLink>
          <NavLink to="/settings"><button className="btn btn-success">settings</button></NavLink>
          <NavLink to="/"><button>featured</button></NavLink>
        </div>
      </div>
    );
  }
}
