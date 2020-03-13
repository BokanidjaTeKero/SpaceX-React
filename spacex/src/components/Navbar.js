import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/logo.png';
import './Navbar.css';

const Navbar =  () => {
    
    return (
        <div className='navbar'>
            <div className='navbar-components'>
                <img src={ Logo } alt='logo' />
                <ul className='navbar-btns'>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/launches'>LAUNCHES</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;