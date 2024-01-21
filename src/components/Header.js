import logo from '../images/logo.svg';
import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className='container'>
                <a href='/'><img src={logo} alt='logo'/></a>
                <div className='nav-links'>
                    <li className='link'><Link to='/'>Home</Link></li>
                    <li className='link'><Link to='/about'>About</Link></li>
                    <li className='link'><Link to='/portfolio'>Portfolio</Link></li>
                    <li className='link'><Link to='/services'>Services</Link></li>
                    <li className='link'><Link to='/contact'>Contact</Link></li>
                </div>
                <div></div>
            </nav>
        </header>
    )
}
