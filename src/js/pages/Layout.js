import React from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import Featured from "./Featured.js";
import Archives from "./Archives.js";
import Settings from "./Settings.js";
import Nav from "../components/Layout/Nav.js";
import Footer from "../components/Layout/Footer.js";

//import Bootstrap from "../vendor/bootstrap-without-jquery.js"

export default class Layout extends React.Component {
  render() {
    console.log(this.props);
    const { location } = this.props;

    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>
        <Nav location={location} />
        <div className='container' style={containerStyle}>
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
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
