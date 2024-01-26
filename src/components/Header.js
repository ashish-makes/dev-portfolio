import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const closeMobileMenu = () => {
        setShowMobileMenu(false);
    };

    return (
        <>
            <header>
                <nav className='container'>
                    <Link to='/'><img src={logo} alt='logo' /></Link>
                    <div>
                        <ul className='nav-links'>
                            <li className='link'><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
                            <li className='link'><Link to='/about' onClick={closeMobileMenu}>About</Link></li>
                            <li className='link'><Link to='/portfolio' onClick={closeMobileMenu}>Portfolio</Link></li>
                            <li className='link'><Link to='/services' onClick={closeMobileMenu}>Services</Link></li>
                            <li className='link'><Link to='/contact' onClick={closeMobileMenu}>Contact</Link></li>
                        </ul>
                    </div>
                    <div></div>
                    <div className='mob-nav-icon' onClick={toggleMobileMenu}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H5C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75H19C19.4142 12.75 19.75 12.4142 19.75 12Z" fill="#FEB244" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.75 7C19.75 6.58579 19.4142 6.25 19 6.25H5C4.58579 6.25 4.25 6.58579 4.25 7C4.25 7.41421 4.58579 7.75 5 7.75H19C19.4142 7.75 19.75 7.41421 19.75 7Z" fill="#FEB244" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.75 17C19.75 16.5858 19.4142 16.25 19 16.25H5C4.58579 16.25 4.25 16.5858 4.25 17C4.25 17.4142 4.58579 17.75 5 17.75H19C19.4142 17.75 19.75 17.4142 19.75 17Z" fill="#FEB244" />
                        </svg>
                    </div>
                </nav>
            </header>

            <div className={`mob-nav-menu ${showMobileMenu ? 'show' : ''}`}>
                <div className='mob-logo-close-btn'>
                    <div>
                        <Link to='/'><img src={logo} alt='logo' /></Link>
                    </div>
                    <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href='/' className='btn'>
                        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.46447 15.5355L15.5355 8.46446" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M8.46447 8.46447L15.5355 15.5355" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg> */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.75 16.1893L15.4697 13.4697C15.7626 13.1768 16.2374 13.1768 16.5303 13.4697C16.8232 13.7626 16.8232 14.2374 16.5303 14.5303L12.5303 18.5303C12.2374 18.8232 11.7626 18.8232 11.4697 18.5303L7.46967 14.5303C7.17678 14.2374 7.17678 13.7626 7.46967 13.4697C7.76256 13.1768 8.23744 13.1768 8.53033 13.4697L11.25 16.1893L11.25 6.5C11.25 6.08579 11.5858 5.75 12 5.75C12.4142 5.75 12.75 6.08579 12.75 6.5L12.75 16.1893Z" fill="white" />
                        </svg>
                        download resume
                    </a>
                </div>
                <ul className='mob-nav-menu-links'>
                    <li className='link'><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
                    <li className='link'><Link to='/about' onClick={closeMobileMenu}>About</Link></li>
                    <li className='link'><Link to='/portfolio' onClick={closeMobileMenu}>Portfolio</Link></li>
                    <li className='link'><Link to='/services' onClick={closeMobileMenu}>Services</Link></li>
                    <li className='link'><Link to='/contact' onClick={closeMobileMenu}>Contact</Link></li>
                </ul>
            </div>
        </>
    );
}
