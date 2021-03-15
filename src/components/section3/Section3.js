import React from 'react'
import ImgSection from "../../images/4e798460a5ce5827922511184f727802f4c93cd3.png"

export default function Section3() {
    return (
        <div className="container__section2 container__section3 section">
            <div className="header__section2 sect3">
                <h2>The Everyday Alarm to wake up Smiling</h2>
                <p>Who has not ended up hating that song taht forces you to get out of bed every morning? With Alarmify you can choose from more than 40 million songs available so this will never happen to you</p>
            </div>
            <div className="image__container">
            <img src={ImgSection} ></img>
            </div>
        </div>
    )
}
