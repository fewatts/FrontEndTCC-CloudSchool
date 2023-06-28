import { useState } from 'react';
import './NavBar.css';
import cloud from './../../assets/logos/cloud.svg';
import { Link } from 'react-router-dom';

export function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
      <img src={cloud} alt="logo" className='logo' />

      <ul className={`links ${isActive ? 'active' : ''}`}>
        <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
        <li><Link to='/cv' onClick={toggleMenu}>CV</Link></li>
        <li><Link to='/about' onClick={toggleMenu}>Sobre</Link></li>
      </ul>

      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className={`bar ${isActive ? 'active' : ''}`}></span>
        <span className={`bar ${isActive ? 'active' : ''}`}></span>
        <span className={`bar ${isActive ? 'active' : ''}`}></span>
      </div>
    </nav>
  );
}
