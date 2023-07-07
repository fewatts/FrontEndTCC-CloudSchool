import { Link } from 'react-router-dom';
import './Menu.css';

export function Menu() {
    return (
        <>
            <h5 className='h5menu'><Link to='/'>❌</Link></h5>
            <div className='menu-ham'>
                <ul className='list-menu'>
                    <li><Link to='/' ><h1 className='h1menu'>Home</h1></Link></li>
                    <li><Link to='/cv' ><h1 className='h1menu'>Currículos</h1></Link></li>
                    <li><Link to='/about' ><h1 className='h1menu' id='h1menul'>Saiba mais</h1></Link></li>
                </ul>
            </div>
        </>
    );
}