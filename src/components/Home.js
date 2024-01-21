import heroImg from '../images/hero-bg.png';
import React from 'react'

export default function Hero() {
    return (
        <section className='container hero'>
            <div>
                <h1 style={{ color: '#feb244' }}>hello</h1>
                <h1><i>world</i><span style={{color: '#feb244'}}>.</span></h1>
                <p>I'm Ashish, a passionate software developer continously learning<br/>& seeking new opportunities on a mission to create<br/>internet a better place, one site at a time.</p>
            </div>
            <div>
                <img src={heroImg}/>
            </div>
        </section>
    )
}
