import React from 'react'

export default function Section2() {
    return (
        <div className="container__section2 extra section">
            <div className="header__section2 special">
                <h2>The Good Mood Alarm </h2>
                <p>Waking up every morning in a bad mood and without energy, it shouldn't be usual. Alarmify is a new way to wake up laughing, dancing, renewed and is unlike anything you've ever seen or used before. Be prepared for the huge change thatbis arriving to your life.</p>
            </div>
            <div className="grid__icons">
                <div className="icon__unit">
                    <SvgSpotify/>
                    <h4>Spotify Connected</h4>
                    <p>More than 40M songs to choose from.</p>
                </div>
                <div className="icon__unit">
                    <SvgHeart/>
                    <h4>Sense of Freedom</h4>
                    <p>Choose from Songs.
                        Playlists, Artist or Albums.
                    </p>
                </div>
                <div className="icon__unit">
                    <SvgBateria/>
                    <h4>Full Energeized</h4>
                    <p>Wake up fully recharged with your favorite songs.</p>
                </div>
                <div className="icon__unit">
                    <SvgSpotify/>
                    <h4>Be Happy</h4>
                    <p>You need ??? this alarm to sleep a??? bit more.</p>
                </div>
                <div className="icon__unit">
                <SvgHeart/>
                    <h4>Health Habits</h4>
                    <p>Wake up increasing the volume gradually.</p>
                </div>
                <div className="icon__unit">
                    <SvgBateria/>
                    <h4>Playlists</h4>
                    <p>We prepare new playlists for you.</p>
                </div>
            </div>
        </div>
    )
}

const SvgSpotify =()=><svg xmlns="http://www.w3.org/2000/svg" className="svg-spotify" id="Layer_1" viewBox="0 0 2931 2931"><path fill="#2ebd59" d="M1465.5 0C656.1 0 0 656.1 0 1465.5S656.1 2931 1465.5 2931 2931 2274.9 2931 1465.5C2931 656.2 2274.9.1 1465.5 0zm672.1 2113.6c-26.3 43.2-82.6 56.7-125.6 30.4-344.1-210.3-777.3-257.8-1287.4-141.3-49.2 11.3-98.2-19.5-109.4-68.7-11.3-49.2 19.4-98.2 68.7-109.4C1242.1 1697.1 1721 1752 2107.3 1988c43 26.5 56.7 82.6 30.3 125.6zm179.3-398.9c-33.1 53.8-103.5 70.6-157.2 37.6-393.8-242.1-994.4-312.2-1460.3-170.8-60.4 18.3-124.2-15.8-142.6-76.1-18.2-60.4 15.9-124.1 76.2-142.5 532.2-161.5 1193.9-83.3 1646.2 194.7 53.8 33.1 70.8 103.4 37.7 157.1zm15.4-415.6c-472.4-280.5-1251.6-306.3-1702.6-169.5-72.4 22-149-18.9-170.9-91.3-21.9-72.4 18.9-149 91.4-171 517.7-157.1 1378.2-126.8 1922 196 65.1 38.7 86.5 122.8 47.9 187.8-38.5 65.2-122.8 86.7-187.8 48z"/></svg>

const SvgHeart =()=><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M45.8332 10.6111C43.9721 6.79165 38.611 3.66665 32.3749 5.48609C29.395 6.34684 26.7951 8.19274 24.9999 10.7222C23.2047 8.19274 20.6048 6.34684 17.6249 5.48609C11.3749 3.69443 6.02767 6.79165 4.16656 10.6111C1.55545 15.9583 2.63879 21.9722 7.38879 28.4861C11.111 33.5833 16.4305 38.75 24.1527 44.75C24.3967 44.9403 24.6973 45.0437 25.0068 45.0437C25.3163 45.0437 25.617 44.9403 25.861 44.75C33.5693 38.7639 38.9027 33.6389 42.6249 28.4861C47.361 21.9722 48.4443 15.9583 45.8332 10.6111V10.6111Z" fill="#2ebd59"/>
</svg>

const SvgBateria =()=><svg width="63" height="50" viewBox="0 0 63 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0)">
<path d="M56.6154 31.3846V22.1538H62.7693V9.84613H56.6154V0.615356L1.23083 0.615356V31.3846L56.6154 31.3846ZM7.38468 12.923L24.3078 12.923V6.7692L47.3847 19.0769L30.4616 19.0769V25.2307L7.38468 12.923Z" fill="#2EBD59"/>
<rect x="56.616" y="9.84631" width="1.23077" height="12.3077" fill="#111111"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="32" height="62.7692" fill="white" transform="translate(62.7693) rotate(90)"/>
</clipPath>
</defs>
</svg>

