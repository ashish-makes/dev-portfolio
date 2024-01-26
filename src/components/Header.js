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
                    <div className='desktop-resume'>
                        <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', gap: '5px'}} href='/' className='btn'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0315 13.1643C14.355 12.9056 14.8269 12.958 15.0857 13.2815C15.3444 13.6049 15.292 14.0769 14.9685 14.3357L12.4746 16.3308C12.3459 16.4361 12.1816 16.4994 12.0025 16.5L12.0001 16.5L11.9937 16.5C11.8177 16.4985 11.6561 16.4364 11.5288 16.3335L9.03151 14.3357C8.70806 14.0769 8.65562 13.6049 8.91438 13.2815C9.17313 12.958 9.6451 12.9056 9.96855 13.1643L11.2501 14.1896V10.75C11.2501 10.3358 11.5858 10 12.0001 10C12.4143 10 12.7501 10.3358 12.7501 10.75V14.1895L14.0315 13.1643Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.25C5.48122 2.25 4.25 3.48122 4.25 5V19C4.25 20.5188 5.48122 21.75 7 21.75H17C18.5188 21.75 19.75 20.5188 19.75 19V8.1979C19.75 7.83178 19.6352 7.47488 19.4217 7.17745L16.4085 2.97955C16.0798 2.52157 15.5506 2.25 14.9868 2.25H7ZM5.75 5C5.75 4.30964 6.30964 3.75 7 3.75H14.25V8.14705C14.25 8.56126 14.5858 8.89705 15 8.89705H18.25V19C18.25 19.6904 17.6904 20.25 17 20.25H7C6.30964 20.25 5.75 19.6904 5.75 19V5Z" fill="white" />
                            </svg>
                            download resume
                        </a>
                    </div>
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
                    <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }} href='/' className='btn'>
                        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.46447 15.5355L15.5355 8.46446" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M8.46447 8.46447L15.5355 15.5355" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg> */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0315 13.1643C14.355 12.9056 14.8269 12.958 15.0857 13.2815C15.3444 13.6049 15.292 14.0769 14.9685 14.3357L12.4746 16.3308C12.3459 16.4361 12.1816 16.4994 12.0025 16.5L12.0001 16.5L11.9937 16.5C11.8177 16.4985 11.6561 16.4364 11.5288 16.3335L9.03151 14.3357C8.70806 14.0769 8.65562 13.6049 8.91438 13.2815C9.17313 12.958 9.6451 12.9056 9.96855 13.1643L11.2501 14.1896V10.75C11.2501 10.3358 11.5858 10 12.0001 10C12.4143 10 12.7501 10.3358 12.7501 10.75V14.1895L14.0315 13.1643Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.25C5.48122 2.25 4.25 3.48122 4.25 5V19C4.25 20.5188 5.48122 21.75 7 21.75H17C18.5188 21.75 19.75 20.5188 19.75 19V8.1979C19.75 7.83178 19.6352 7.47488 19.4217 7.17745L16.4085 2.97955C16.0798 2.52157 15.5506 2.25 14.9868 2.25H7ZM5.75 5C5.75 4.30964 6.30964 3.75 7 3.75H14.25V8.14705C14.25 8.56126 14.5858 8.89705 15 8.89705H18.25V19C18.25 19.6904 17.6904 20.25 17 20.25H7C6.30964 20.25 5.75 19.6904 5.75 19V5Z" fill="white" />
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
                {/* <div className='socials'>
                    <ul>
                        <li>
                            <a href='https://github.com/ashish-makes' target='_blank'>github</a>
                            <svg className="hover-effect" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#FEB244" />
                            </svg>
                        </li>
                        <li>github</li>
                        <li>github</li>
                        <li>github</li>
                    </ul>
                </div> */}
            </div>
        </>
    );
}
