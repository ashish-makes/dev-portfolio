import heroImg from '../images/hero-bg.webp';
import React from 'react'

export default function Hero() {
    return (
        <>
        <main>
        <div className='container hero'>
                <div>
                    <h1 style={{ color: '#feb244' }}>hello</h1>
                    <h1><i>world</i><span style={{ color: '#feb244' }}>.</span></h1>
                    <p>I'm Ashish, a passionate software developer continously learning<br />& seeking new opportunities on a mission to create<br />internet a better place, one site at a time.</p>
                    <div className='socials'>
                        <ul>
                            <a href='https://github.com/ashish-makes' target='_blank'><li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </li></a>
                            <a href='https://www.linkedin.com/in/ashish-makes/' target='_blank'><li>
                                <svg width="36" height="36" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.75 11C8.75 10.5858 8.41421 10.25 8 10.25C7.58579 10.25 7.25 10.5858 7.25 11H8.75ZM7.25 17C7.25 17.4142 7.58579 17.75 8 17.75C8.41421 17.75 8.75 17.4142 8.75 17H7.25ZM17.25 17C17.25 17.4142 17.5858 17.75 18 17.75C18.4142 17.75 18.75 17.4142 18.75 17H17.25ZM12 14H11.25H12ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8H8.75ZM7.25 9C7.25 9.41421 7.58579 9.75 8 9.75C8.41421 9.75 8.75 9.41421 8.75 9H7.25ZM7.25 11V17H8.75V11H7.25ZM18.75 17V14H17.25V17H18.75ZM18.75 14C18.75 11.9289 17.0711 10.25 15 10.25V11.75C16.2426 11.75 17.25 12.7574 17.25 14H18.75ZM15 10.25C12.9289 10.25 11.25 11.9289 11.25 14H12.75C12.75 12.7574 13.7574 11.75 15 11.75V10.25ZM11.25 14V17H12.75V14H11.25ZM7.25 8V9H8.75V8H7.25Z" fill="#fff" />
                                </svg>
                            </li></a>
                            <a href='https://twitter.com/ashish_makes' target='_blank'><li>
                                <svg width="22" height="22" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white" />
                                </svg>
                            </li></a>
                            <a href='mailto:ashish.makes@gmail.com' target='_blank'><li>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5 11.25H8.5C8.09 11.25 7.75 10.91 7.75 10.5C7.75 10.09 8.09 9.75 8.5 9.75H15.5C15.91 9.75 16.25 10.09 16.25 10.5C16.25 10.91 15.91 11.25 15.5 11.25Z" fill="white"></path>
                                    <path d="M16 22.3199C15.66 22.3199 15.32 22.22 15.03 22.03L10.77 19.1899H7C3.56 19.1899 1.25 16.8799 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.6199 20.77 18.84 17.75 19.15V20.5699C17.75 21.2199 17.4 21.8099 16.83 22.1099C16.57 22.2499 16.28 22.3199 16 22.3199ZM7 3.17993C4.42 3.17993 2.75 4.84993 2.75 7.42993V13.4299C2.75 16.0099 4.42 17.6799 7 17.6799H11C11.15 17.6799 11.29 17.7199 11.42 17.8099L15.87 20.77C15.98 20.84 16.08 20.81 16.13 20.78C16.18 20.75 16.26 20.6899 16.26 20.5599V18.4299C16.26 18.0199 16.6 17.6799 17.01 17.6799C19.59 17.6799 21.26 16.0099 21.26 13.4299V7.42993C21.26 4.84993 19.59 3.17993 17.01 3.17993H7Z" fill="white"></path>
                                </svg>
                            </li></a>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src={heroImg} alt='hero-img' />
                </div>
            </div>
        </main>
            {/* <section className='featured container'>
                <h1 style={{ fontSize: '60px' }}>featured today.</h1>
                <div className='featured-content'>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </section> */}
        </>
    )
}
