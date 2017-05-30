import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
  constructor(){
    super();
    this.state = {
      collapsed: true
    }
  }
  toggleClass(){
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { collapsed } = this.state;
    const { pathname } = this.props.location;
    const navClass = collapsed ? "collapse":'';
    const featuredClass = pathname === '/' ? 'active':'';
    const archivesClass = pathname.match(/^\/archives/) ? 'active':'' ;
    const settingsClass =  pathname.match(/^\/settings/) ? 'active':'';
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={this.toggleClass.bind(this)} data-toggle="collapse" data-target="#navbarContent" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse "+navClass} id="navbarContent">
            <ul className="nav navbar-nav">
              <li className={featuredClass}><NavLink to='/' onClick={this.toggleClass.bind(this)}>Featured</NavLink></li>
              <li className={archivesClass}><NavLink to='/archives' onClick={this.toggleClass.bind(this)}>Archives</NavLink></li>
              <li className={settingsClass}><NavLink to='/settings' onClick={this.toggleClass.bind(this)}>Settings</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
