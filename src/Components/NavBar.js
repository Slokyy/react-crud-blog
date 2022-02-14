import React from 'react';
import "../styles/Components/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container flex">
        
        <h1>Slowkey's blog</h1>
        
        <ul className="nav-links flex">
          <li><a href="/">Pocetna</a></li>
          <li><a href="/create">Novi Blog</a></li>
        </ul>

      </div>
    </nav>
  )
}

export default NavBar