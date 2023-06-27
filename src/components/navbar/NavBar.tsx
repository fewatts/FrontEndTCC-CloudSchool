import './Navbar.css';
import cloud from './../../assets/cloud.svg';
import { Link } from 'react-router-dom';

export function NavBar() {


    return (
        <nav>
            <img src={cloud} alt="logo" className='logo'/>

            <ul className='links'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/'><li>CV</li></Link>
                <Link to='/'><li>Sobre</li></Link>
            </ul>

        </nav>
    );
}