import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component
{
    render() 
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
              <div className="col-10 text-white text-left">
                <h3><Link to="/" className="text-white">Cities</Link></h3>
              </div>
              <div className="col-2 text-white  text-left">
                <h4><Link to="/city-map" className="text-white">Cities map</Link></h4>
              </div>
            </nav>
        );
    }
}

export default NavBar;
