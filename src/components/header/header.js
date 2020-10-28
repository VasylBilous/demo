import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="nav-link" to='/' >Persons <span className="sr-only">(current)</span></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to='/all' >All Persons <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to='/favorites' >Favorite Persons <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to='/add' >Add Person <span className="sr-only">(current)</span></Link>
      </li>
    </ul>
  </div>
</nav>
}

export default Header;