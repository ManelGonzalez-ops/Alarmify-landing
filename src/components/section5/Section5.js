import React from 'react'
import logoApple from "../../images/44dfc05ef329030edfe7dec30d65f37647242daf.png"

export default function Section5() {
    return (
        <div className="container__section5">
            <div className="header__section2">
                <h2>What are you waiting for?</h2>
                <p>That's right, what are you waiting for? You've come this far, read all the way to the bottom of the page. The only thing left to do is to get yourselfover to the App Store and download Alarmify today...</p>
            </div>
            <div className="logo5__wrapper">
            <a href="https://apps.apple.com/us/app/wake-up-for-spotify-music/id1460664069" target="blank" ><img src={logoApple} alt="Apple" className="logo__apple2"></img></a>
            </div>
        </div>
    )
}
