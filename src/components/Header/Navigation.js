// React libraries and 3rd party libraries
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from './MenuIcon';


class Navigation extends Component {
  state = {
    collapsed: true
  }


  handleMenuClick = e => {
    this.setState(state => { return {collapsed: !state.collapsed} })
  }

  render() {
  return (
    <nav className="nav_hamburger">
        <div className="nav_icon" onClick={this.handleMenuClick} >
          <MenuIcon />
        </div>
        <div className={`nav_hamburger-dropdown ${this.state.collapsed ? "collapsed" : ""}`} >
          <ul className="nav_list spacer" >
            <li className="nav_list-item">
              <NavLink className="nav_link" to="/home">Home</NavLink>
            </li>
            <li className="nav_list-item">
              <NavLink className="nav_link" to="/view">View</NavLink> 
            </li>
            <li className="nav_list-item">
              <NavLink className="nav_link" to="/add">Add</NavLink>
            </li>
          </ul>
          <ul className="nav_list">
            <li className="nav_list-item">
                <NavLink className="nav_link" to="/login">Log Out</NavLink>
              </li>
          </ul>
        </div>
    </nav>)}};

export default Navigation;



