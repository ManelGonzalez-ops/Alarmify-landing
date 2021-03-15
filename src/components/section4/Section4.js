import React from 'react'

export default function Section4() {
    return (
        <div className="container__section4">
            <div className="header__section4">
                <h2>What people are saying</h2>
                <p>Alarmify is your dream alarm <br/>
                We don't say it, people confirm it with their reviews day by day</p>
            </div>
            <div className="grid__section4">
                <blockquote className="grid4__unit">
                   <SvgStrellas/> 
                    <h3>Fantastic idea</h3>
                    <cite>Finally I can wake up with Spotify Music! I have been looking this app for a long time.</cite>
                    <h5>by Aleixrr via the App Store</h5>
                </blockquote>
                <blockquote className="grid4__unit">
                   <SvgStrellas/> 
                    <h3>Finally a decent alarm clock</h3>
                    <cite>Easy to set up, works great. I wish I would have it earlier.</cite>
                    <h5>by Pdiassim via the App Store</h5>
                </blockquote>
                <blockquote className="grid4__unit">
                   <SvgStrellas/> 
                    <h3>Thank you!</h3>
                    <cite>Today  I used it for the first time woke up dancing in bed<span className="icun">🙏&#128513;</span> Very useful and recommended, intuitive and easy to use</cite>🌟
                    <h5>by antoniodiazyoga via the App Store</h5>
                </blockquote>
                <blockquote className="grid4__unit">
                   <SvgStrellas/> 
                    <h3>Amazing</h3>
                    <cite>It's crazy to wake up with my Playlists every morning. Congratulations !!!<br/>
                    SUPER RECOMMENDED</cite>
                    <h5>by JompyDakiDaya via the App Store</h5>
                </blockquote>
                <blockquote className="grid4__unit">
                   <SvgStrellas/> 
                    <h3>Keeps me on track</h3>
                    <cite>Depends on weather it is weekdays or weekends I choose a quiter or more active  song. Congrats!</cite>👏👏👨‍👩‍👧‍👦
                    <h5>by ChemaSolís via the App Store</h5>
                </blockquote>
                <blockquote className="grid4__unit">
                   <SvgStrellas/> 
                    <h3>Works Perfectly  </h3>
                    <cite>I've tried apps of the style bit they didn't work well, I've been using this one for a while and I'm feeling less stressed</cite>
                    <h5>by RubenHolgado via the App Store</h5>
                </blockquote>
            </div>
            
        </div>
    )
}


const SvgStrellas =()=><svg className="svg-estrellas" viewBox="0 0 177 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M26.4374 32.2609L16.3373 24.8546L6.04225 31.9873L9.96504 20.093L0 12.5059L12.5245 12.5611L16.6608 0.739258L20.4786 12.6678L33 12.9485L22.835 20.2656L26.4374 32.2609Z" fill="#1ED761"/>
</g>
<g clip-path="url(#clip1)">
<path d="M134.437 32.5217L124.337 25.1153L114.042 32.2481L117.965 20.3537L108 12.7666L120.524 12.8218L124.661 1L128.479 12.9285L141 13.2093L130.835 20.5263L134.437 32.5217Z" fill="#1ED761"/>
</g>
<g clip-path="url(#clip2)">
<path d="M170.437 32.2609L160.337 24.8546L150.042 31.9873L153.965 20.093L144 12.5059L156.524 12.5611L160.661 0.739258L164.479 12.6678L177 12.9485L166.835 20.2656L170.437 32.2609Z" fill="#1ED761"/>
</g>
<path d="M62.4374 32.5217L52.3373 25.1153L42.0422 32.2481L45.965 20.3537L36 12.7666L48.5245 12.8218L52.6608 1L56.4786 12.9285L69 13.2093L58.835 20.5263L62.4374 32.5217Z" fill="#1ED761"/>
<g clip-path="url(#clip3)">
<path d="M98.4374 32.2609L88.3373 24.8546L78.0422 31.9873L81.965 20.093L72 12.5059L84.5245 12.5611L88.6608 0.739258L92.4786 12.6678L105 12.9485L94.835 20.2656L98.4374 32.2609Z" fill="#1ED761"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="33" height="33" fill="white"/>
</clipPath>
<clipPath id="clip1">
<rect width="33" height="33" fill="white" transform="translate(108)"/>
</clipPath>
<clipPath id="clip2">
<rect width="33" height="33" fill="white" transform="translate(144)"/>
</clipPath>
<clipPath id="clip3">
<rect width="33" height="33" fill="white" transform="translate(72)"/>
</clipPath>
</defs>
</svg>
