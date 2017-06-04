import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends React.Component {
  constructor () {
    super()
    this.state = {
      collapsed: true
    }
  }
  toggleClass () {
    const collapsed = !this.state.collapsed
    this.setState({collapsed})
  }

  render () {
    const { collapsed } = this.state
    const { pathname } = this.props.location
    const navClass = collapsed ? 'collapse' : ''
    const TodosClass = pathname === '/' ? 'active' : ''
    const FavouritesClass = pathname.match(/^\/archives/) ? 'active' : ''
    const settingsClass = pathname.match(/^\/settings/) ? 'active' : ''
    return (
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' onClick={this.toggleClass.bind(this)} data-toggle='collapse' data-target='#navbarContent' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
          </div>
          <div className={'navbar-collapse ' + navClass} id='navbarContent'>
            <ul className='nav navbar-nav'>
              <li className={TodosClass}><NavLink to='/' onClick={this.toggleClass.bind(this)}>Todos</NavLink></li>
              <li className={FavouritesClass}><NavLink to='/favourites' onClick={this.toggleClass.bind(this)}>Favourites</NavLink></li>
              <li className={settingsClass}><NavLink to='/settings' onClick={this.toggleClass.bind(this)}>Settings</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
