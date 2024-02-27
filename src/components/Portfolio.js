import lmsImg from '../images/django-lms.webp';
import toolsImg from '../images/django-tools-website.webp';
import pblogImg from '../images/django-personal-blog-app.webp';
import djbImg from '../images/django-tailwind-blog.webp';
import webaImg from '../images/web-design-agency.webp';
import candywebImg from '../images/candy-landing-page.webp';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {

    return (
        <div className='portfolio container'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 style={{ fontSize: '60px' }}>my works.</h1>
                <a style={{ float: 'right', }} href='https://github.com/ashish-makes' target='_blank' className="hover-effect btn">
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ color: '#fff' }}>see more</p>
                        <svg
                            width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="white" />
                        </svg>
                    </span>
                </a>
            </div>

            <div className='projects'>
                <div className='project' ref={el => {if (el) gsap.fromTo(el, {scrollTrigger: {trigger: el, start: "top bottom"}, opacity: 0, y: 100}, {scrollTrigger: {trigger: el, start: "top bottom"}, opacity: 1, y: 0, duration: .5})}}>
                    <img src={lmsImg} alt='django-lms' />
                    <div style={{ padding: '20px' }}>
                        <h2>Skillmate - An eLearning Platform</h2>
                        <p style={{ margin: '10px 0' }}>Skillmate is an online learning platform that allows instructors to create and sell courses to students.</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a href='https://github.com/ashish-makes/django-lms' target='_blank' className="hover-effect">
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>github</p>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#FEB244" />
                                    </svg>
                                </span>
                            </a>
                            <a href='https://github.com/ashish-makes/django-lms' target='_blank' className="hover-effect">
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>see it in action</p>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#FEB244" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='project'  ref={el => {if (el) gsap.fromTo(el, {scrollTrigger: {trigger: el, start: "top bottom"}, opacity: 0, y: 100}, {scrollTrigger: {trigger: el, start: "top bottom"}, opacity: 1, y: 0, duration: .6})}}>
                    <img src={toolsImg} alt='django-tools-web' />
                    <div style={{ padding: '20px' }}>
                        <h2>Toolify - A All in One Tools Website</h2>
                        <p style={{ margin: '10px 0' }}>Toolify is a webapp built with django that offers a collection of various web development tools and resources.</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a href='https://github.com/ashish-makes/django-tools-website' target='_blank' className="hover-effect">
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>github</p>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#FEB244" />
                                    </svg>
                                </span>
                            </a>
                            <a href='https://github.com/ashish-makes/django-tools-website' target='_blank' className="hover-effect">
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>see it in action</p>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#FEB244" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='project'  ref={el => {if (el) gsap.fromTo(el, {scrollTrigger: {trigger: el, start: "top bottom"}, opacity: 0, y: 100}, {scrollTrigger: {trigger: el, start: "top bottom"}, opacity: 1, y: 0, duration: .7})}}>
                    <img src={pblogImg} alt='django-blog' />
                    <div style={{ padding: '20px' }}>
                        <h2>Django Blog - A Personal Portfolio & Blog</h2>
                        <p style={{ margin: '10px 0' }}>A Personal Blog and portfolio website built using Django and with all the necesarry pages such as Projects, Blog and more.</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a href='https://github.com/ashish-makes/django-blog' target='_blank' className="hover-effect">
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>github</p>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#FEB244" />
                                    </svg>
                                </span>
                            </a>
                            <a href='https://github.com/ashish-makes/django-blog' target='_blank' className="hover-effect">
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>see it in action</p>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#FEB244" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='project'  ref={el => {if (el) gsap.fromTo(el, {scrollTrigger: {trigger: el, start: "top bottom"}, opacity: 0, y: 100}, {scrollTrigger: {trigger: el, start: "top bottom"}, opacity: 1, y: 0, duration: .8})}}>
                    <img src={djbImg} alt='django-tailwind-blog' />
                    <div style={{ padding: '20px' }}>
                        <h2>Django Tailwind Blog - A Developer Portfolio & Blog</h2>
                        <p style={{ margin: '10px 0' }}>Django Tailwind Blog is a developer blog and portfolio website built using Django and Tailwind CSS.</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a href='https://github.com/ashish-makes/django-tailwind-blog' target='_blank' className="hover-effect">
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>github</p>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#FEB244" />
                                    </svg>
                                </span>
                            </a>
                            <a href='https://github.com/ashish-makes/django-tailwind-blog' target='_blank' className="hover-effect">
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>see it in action</p>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#FEB244" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='project'  ref={el => {if (el) gsap.fromTo(el, {scrollTrigger: {trigger: el, start: "top bottom"}, opacity: 0, y: 100}, {scrollTrigger: {trigger: el, start: "top bottom"}, opacity: 1, y: 0, duration: 1})}}>
                    <img src={webaImg} alt='web-dev-agency' />
                    <div style={{ padding: '20px' }}>
                        <h2>Blackcode - Web Development Services Agency Website</h2>
                        <p style={{ margin: '10px 0' }}>Web Development Services Agency Landing Page is a professional website showcasing tailored web development services and expertise.</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a href='https://github.com/ashish-makes/blk-code' target='_blank' className="hover-effect">
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>github</p>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#FEB244" />
                                    </svg>
                                </span>
                            </a>
                            <a href='https://blackcode.vercel.app/' target='_blank' className="hover-effect">
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>see it in action</p>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#FEB244" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='project'  ref={el => {if (el) gsap.fromTo(el, {scrollTrigger: {trigger: el, start: "top bottom"}, opacity: 0, y: 100}, {scrollTrigger: {trigger: el, start: "top bottom"}, opacity: 1, y: 0, duration: 1.1})}}>
                    <img src={candywebImg} alt='candy-web' />
                    <div style={{ padding: '20px' }}>
                        <h2>Pulse Candy - Candy Selling Website Landing Page</h2>
                        <p style={{ margin: '10px 0' }}>A candy selling landing page including all the popular candies and some info adbotu each candy with the links to buy them online</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a href='https://github.com/ashish-makes/pulse-candy' target='_blank' className="hover-effect">
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>github</p>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#FEB244" />
                                    </svg>
                                </span>
                            </a>
                            <a href='https://pulse-candy.netlify.app/' target='_blank' className="hover-effect">
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>see it in action</p>
                                    <svg
                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#FEB244" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

