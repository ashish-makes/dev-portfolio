import React, {useState} from 'react'
import djprojectSetup from '../images/setup-django-project.webp';


export default function Resources() {
    return (
        <>
            <div className='container resources'>
                <h1 style={{ fontSize: '60px' }}>useful resources.</h1>
                <div className='resources-content'>
                    <div className='resource'>
                        <img src={djprojectSetup} alt="django-project-setup" />
                        <p style={{ margin: '10px 0', fontWeight: '800', }} >A Comprehensive Guide to Setting Up Django Projects</p>
                        <div className='rcs-info'>
                            {/* <span className='download-count'>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9991 21.2501C11.8091 21.2501 11.6191 21.1801 11.4691 21.0301L5.39914 14.9601C5.10914 14.6701 5.10914 14.1901 5.39914 13.9001C5.68914 13.6101 6.16914 13.6101 6.45914 13.9001L11.9991 19.4401L17.5391 13.9001C17.8291 13.6101 18.3091 13.6101 18.5991 13.9001C18.8891 14.1901 18.8891 14.6701 18.5991 14.9601L12.5291 21.0301C12.3791 21.1801 12.1891 21.2501 11.9991 21.2501Z" fill="#FEB244" />
                                    <path d="M12 21.08C11.59 21.08 11.25 20.74 11.25 20.33V3.5C11.25 3.09 11.59 2.75 12 2.75C12.41 2.75 12.75 3.09 12.75 3.5V20.33C12.75 20.74 12.41 21.08 12 21.08Z" fill="#FEB244" />
                                </svg>
                                <span className='dl-count'>10</span>
                            </span> */}
                            <span></span>
                            <span>
                                <a style={{ float: 'right', }} href='/files/Professionally.setup.Django.project.pdf' download className="hover-effect">
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <p>download</p>
                                        <svg
                                            width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#FEB244" />
                                        </svg>
                                    </span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
