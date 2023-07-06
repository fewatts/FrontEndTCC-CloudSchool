import './NavBar.css';
import cloud from './../../assets/logos/cloud.svg';
import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <Link to='/'><img src={cloud} alt="logo" className='logo' /></Link>
      </div>

      <div id='itens'>
        <ul id='itens2'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/cv'>Cv</Link></li>
          <li><Link to='/about'>Sobre</Link></li>
        </ul>
      </div>

      <Link to='/menu'>
        <span id='burguer' className="material-symbols-outlined">
          menu
        </span>
      </Link>
    </nav>
  );
}
