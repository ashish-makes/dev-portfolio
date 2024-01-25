import React from 'react'
import htmlLogo from '../images/html.png';
import cssLogo from '../images/css.png';
import jsLogo from '../images/js.png';
import pythonLogo from '../images/python.png';
import djangoLogo from '../images/django.png';
import gitLogo from '../images/git.png';
import githubLogo from '../images/github.png';
import reactLogo from '../images/react.png';
import mysqlLogo from '../images/mysql.png';
import tailwindLogo from '../images/tailwind-css.png';
import phpLogo from '../images/php.png';
import bootstarpLogo from '../images/bootstrap.png';


export default function About() {
    return (
        <div className='container about'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 style={{ fontSize: '60px' }}>about me.</h1>
                <a style={{ float: 'right', }} href='https://github.com/ashish-makes' target='_blank' className="hover-effect btn">
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ color: '#fff' }}>say hello</p>
                        <svg
                            width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="white" />
                        </svg>
                    </span>
                </a>
            </div><br />
            <p>Hi,

                My name is Ashish and I am a highly motivated and experienced developer with a passion for creating innovative solutions for the internet.<br /><br />

                After completing my schooling in 2021, I have chosen to further my education in Computer Science while concurrently taking on freelance projects and blogging to expand my skillset. I possess a diverse range of technical knowledge and experience, including proficiency in programming languages such as Python, HTML, CSS, Javascript and SQL, as well as experience with frameworks such as Tailwind CSS and Django.<br /><br />

                I have applied these skills to develop a number of successful real-world applications such as a Skillmate - An eLearning Platform, Toolify - A All in One Online Tools Website, PyShield - Antivirus Application, Full-Stack Blog Website and counting. You can explore more about my projects on portfolio page.<br /><br />

                I am continuously seeking new opportunities to expand my knowledge and improve my abilities as a developer, in order to assist clients in achieving their project goals.</p><br />

            <h2>my tech stack</h2>

            <div className='tech-stack'>
                <div className='tech'>
                    <img style={{width: '80px'}} src= {htmlLogo} alt="html" />
                        <p><b>HTML 5</b></p>
                        <p>Advanced</p>
                </div>
                <div className='tech'>
                    <img src= {cssLogo} alt="css" />
                        <p><b>CSS 3</b></p>
                        <p>Advanced</p>
                </div>
                <div className='tech'>
                    <img src= {jsLogo} alt="javascript" />
                        <p><b>JavaScript</b></p>
                        <p>Intermediate</p>
                </div>
                <div className='tech'>
                    <img src= {reactLogo} alt="react" />
                        <p><b>React</b></p>
                        <p>Intermediate</p>
                </div>
                <div className='tech'>
                    <img src= {tailwindLogo} alt="tailwind" />
                        <p><b>Tailwind CSS</b></p>
                        <p>Advanced</p>
                </div>
                <div className='tech'>
                    <img src= {bootstarpLogo} alt="bootstrap" />
                        <p><b>Bootstrap</b></p>
                        <p>Advanced</p>
                </div>
                <div className='tech'>
                    <img src= {phpLogo} alt="php" />
                        <p><b>PHP</b></p>
                        <p>Intermediate</p>
                </div>
                <div className='tech'>
                    <img src= {pythonLogo} alt="python" />
                        <p><b>Python</b></p>
                        <p>Intermediate</p>
                </div>
                <div className='tech'>
                    <img src= {djangoLogo} alt="django" />
                        <p><b>Django</b></p>
                        <p>Intermediate</p>
                </div>
                <div className='tech'>
                    <img src= {mysqlLogo} alt="mysql" />
                        <p><b>MySQL</b></p>
                        <p>Intermediate</p>
                </div>
                <div className='tech'>
                    <img src= {gitLogo} alt="git" />
                        <p><b>Git</b></p>
                        <p>Intermediate</p>
                </div>
                <div className='tech'>
                    <img src= {githubLogo} alt="github" />
                        <p><b>GitHub</b></p>
                        <p>Intermediate</p>
                </div>
            </div>
        </div>
    )
}
