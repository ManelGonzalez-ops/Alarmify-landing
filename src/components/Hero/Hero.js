import React, { Fragment } from 'react'
import logo from "../../images/d831aedd136ace9442a65e1ea207704fc330dbbe.png"
import logoApple from "../../images/44dfc05ef329030edfe7dec30d65f37647242daf.png"
import movilXLhero from "../../images/2b3d4ff8c624ec279cd4403ab4963cbf5fcd4a66.png"
export default function Hero() {
    return (
        <div className="section">

            <div className="hero__section">
                <img className="big-hero__img" src={movilXLhero} />
                <div className="hero__container">
                    <header><img src={logo} /><h3>Alarmify</h3></header>

                    <h1>Alarm for Spotify<br />
                        Wake up smiling

                </h1>
                    <p>Alarmify will be te award winning app of the year to wake up happy and calm</p>
                    <a href="https://apps.apple.com/us/app/wake-up-for-spotify-music/id1460664069" target="blank" ><img className="logo__apple" src={logoApple} /></a>

                </div>

            </div>

            <div className="band__container">
                <div className="icon__wrapper">
                    <SvgSalesforce />
                    <SvgApple />
                    <SvgCnet />
                </div>
            </div>
        </div>
    )
}

const SvgSalesforce = () => <svg className="salesforce__svg" viewBox="0 0 271 94" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path FillRule="evenodd" clipRule="evenodd" d="M0 84.404C0 79.2563 13.7394 74.9932 30.6004 74.9932C47.4615 74.9932 61.1269 79.2563 61.1269 84.404C61.1269 89.6234 47.4615 93.8895 30.6004 93.8895C13.7394 93.8895 0 89.6219 0 84.404V84.404Z" fill="#999999" />
    <path FillRule="evenodd" clipRule="evenodd" d="M28.223 39.1134L34.2398 33.7476L39.8099 40.5105L63.1315 31.6153L42.4092 50.7312L44.4877 72.713L32.0103 60.508L10.9921 85.3588L21.8363 49.7749L4.60547 26.1747L28.223 39.1134V39.1134ZM4.67943 18.6751C4.67943 16.2484 6.68556 14.2626 9.13699 14.2626C11.5884 14.2626 13.593 16.2484 13.593 18.6751C13.593 21.1003 11.5884 23.0861 9.13699 23.0861C6.68556 23.0861 4.67943 21.1018 4.67943 18.6751Z" fill="#999999" />
    <path FillRule="evenodd" clipRule="evenodd" d="M18.419 8.08839C18.4159 7.0255 18.6251 5.97248 19.0346 4.9899C19.444 4.00731 20.0457 3.11452 20.8048 2.36287C21.564 1.61121 22.4658 1.01551 23.4583 0.610012C24.4509 0.204513 25.5146 -0.00278997 26.5883 2.83549e-05C31.0444 2.83549e-05 34.6837 3.60265 34.6837 8.08839C34.6837 12.5726 31.0444 16.1752 26.5883 16.1752C25.5147 16.1783 24.451 15.9711 23.4585 15.5658C22.4659 15.1605 21.5641 14.5649 20.8049 13.8134C20.0457 13.0619 19.4441 12.1692 19.0346 11.1867C18.6252 10.2042 18.4159 9.15122 18.419 8.08839V8.08839Z" fill="#999999" />
    <path FillRule="evenodd" clipRule="evenodd" d="M42.1118 14.2641C42.1118 10.8827 44.9346 8.16161 48.3506 8.16161C51.7665 8.16161 54.5138 10.8827 54.5138 14.2641C54.5138 17.6471 51.765 20.4398 48.3506 20.4398C44.9346 20.4398 42.1118 17.6456 42.1118 14.2641Z" fill="#999999" />
    <path FillRule="evenodd" clipRule="evenodd" d="M58.8232 26.0268C58.8232 24.2621 60.2346 22.8649 61.9418 22.8649C63.7246 22.8649 65.1359 24.2621 65.1359 26.0268C65.1359 27.7183 63.7246 29.1154 61.9418 29.1154C61.1161 29.1102 60.3257 28.7831 59.7419 28.2049C59.1582 27.6268 58.8281 26.8442 58.8232 26.0268ZM65.2099 67.5652C68.404 68.9624 71.1512 69.7723 74.7167 69.7723C79.7659 69.7723 85.188 67.5652 85.188 61.8303C85.188 54.8478 75.6073 51.1719 75.6073 47.1255C75.6073 44.6271 77.8353 43.6708 80.0633 43.6708C82.7366 43.6708 85.1141 44.6271 87.5655 45.8763L88.4561 41.4638C85.8567 40.361 83.1834 39.7738 80.2867 39.7738C73.0079 39.7738 70.3346 44.5524 70.3346 47.5663C70.3346 54.2575 79.9154 57.5673 79.9154 62.2711C79.9154 64.771 77.5394 65.8753 75.2359 65.8753C72.0434 65.8753 68.9232 64.6246 66.0265 63.1527L65.2099 67.5652V67.5652ZM102.049 69.7738C114.155 69.7738 119.503 56.466 119.503 49.5552C119.503 43.5244 116.161 39.7753 109.997 39.7753C97.4451 39.7753 92.5423 52.8619 92.5423 59.9924C92.5423 66.0232 95.9583 69.7738 102.049 69.7738V69.7738ZM98.1123 58.8164C98.1123 53.0815 101.752 43.6723 108.659 43.6723C112.893 43.6723 113.933 47.127 113.933 50.7311C113.933 56.6857 110.218 65.8768 103.163 65.8768C99.0784 65.8768 98.1123 62.201 98.1123 58.8164V58.8164ZM122.474 79.5506H127.822L134.804 44.3343H146.834L147.652 40.4373H135.619C136.511 35.8798 138.515 30.6589 143.716 30.6589C145.35 30.6589 147.056 30.9533 148.543 31.6869L149.434 27.4971C147.652 27.1295 145.796 26.7619 143.939 26.7619C134.728 26.7619 131.46 36.1727 131.015 37.8642L130.346 40.4373H125.742L124.925 44.3343H129.605L122.474 79.5506V79.5506Z" fill="#999999" />
    <path FillRule="evenodd" clipRule="evenodd" d="M147.653 58.8912C147.28 60.4348 146.984 62.0515 146.984 63.5981C146.984 67.8612 150.324 69.7738 154.189 69.7738C155.449 69.7738 156.563 69.6244 157.68 69.2583L158.42 65.2866C157.502 65.6659 156.519 65.8663 155.524 65.8768C153.592 65.8768 152.181 65.0669 152.181 62.9331C152.181 62.0515 152.554 60.2883 152.777 59.4068L155.823 44.3343H162.062L162.877 40.4373H156.563L157.751 34.5559L152.403 35.2179L151.364 40.4373H146.685L145.867 44.3343H150.546L147.653 58.8912ZM174.837 69.7738C186.94 69.7738 192.288 56.4661 192.288 49.5552C192.288 43.5244 188.948 39.7753 182.709 39.7753C170.228 39.7753 165.33 52.8619 165.33 59.9924C165.33 66.0233 168.671 69.7738 174.837 69.7738V69.7738ZM170.9 58.8165C170.9 53.0816 174.538 43.6723 181.446 43.6723C185.68 43.6723 186.718 47.127 186.718 50.7312C186.718 56.6857 183.005 65.8768 175.951 65.8768C171.863 65.8768 170.9 62.201 170.9 58.8165V58.8165ZM207.738 40.4373H202.465L196.672 69.1119H201.944L204.025 58.966C206.55 55.7309 213.753 44.8498 217.765 44.8498C218.953 44.8498 219.249 46.0258 219.249 47.0568C219.249 47.7188 219.249 48.3792 219.101 49.0412L215.165 69.1134H220.362L224.374 49.1876C224.671 47.94 224.819 46.613 224.819 45.2921C224.819 42.1303 223.483 39.7784 219.992 39.7784C213.678 39.7784 208.331 47.3497 205.36 52.203H205.063L207.738 40.4373V40.4373ZM230.54 69.1119H235.888L241.606 40.4373H236.334L230.54 69.1119V69.1119ZM237.372 35.2179H242.645L243.686 29.997H238.414L237.372 35.2179ZM270.794 40.6569C268.64 40.2161 266.412 39.7753 264.185 39.7753C254.008 39.7753 245.987 50.1409 245.987 59.6264C245.987 65.9485 249.033 69.7723 255.642 69.7723C259.283 69.7723 262.846 68.5963 266.19 67.1977L267.081 62.6403C264.555 64.2585 260.175 65.8753 257.128 65.8753C253.192 65.8753 251.558 62.9316 251.558 59.4052C251.558 52.3479 255.941 43.6708 263.96 43.6708C265.893 43.6708 268.195 44.1848 269.903 44.92L270.794 40.6569V40.6569Z" fill="#999999" />
    <path FillRule="evenodd" clipRule="evenodd" d="M181.595 93.2992H186.125L187.091 88.7402H182.485L181.595 93.2992V93.2992ZM210.115 73.3749C208.553 73.0805 206.995 72.7877 205.436 72.7877C198.379 72.7877 192.733 79.9914 192.733 86.6812C192.733 91.019 194.887 93.7385 199.42 93.7385C202.018 93.7385 204.47 92.9316 206.847 91.9005L207.516 88.7402C205.659 89.843 202.613 91.019 200.534 91.019C197.787 91.019 196.598 88.9599 196.598 86.4615C196.598 81.535 199.715 75.5072 205.286 75.5072C206.625 75.5072 208.26 75.7985 209.445 76.3888L210.115 73.3749V73.3749ZM218.505 93.74C227.049 93.74 230.762 84.404 230.762 79.5506C230.762 75.3593 228.384 72.7877 224.075 72.7877C215.311 72.7877 211.896 81.9041 211.896 86.9023C211.896 91.0937 214.274 93.74 218.505 93.74V93.74ZM215.758 86.0955C215.758 82.0505 218.358 75.5087 223.184 75.5087C226.155 75.5087 226.898 77.8591 226.898 80.4337C226.898 84.5504 224.297 91.0205 219.323 91.0205C216.502 91.019 215.758 88.4459 215.758 86.0955ZM241.531 73.2285H237.893L233.807 93.2977H237.52L239.007 85.946C240.418 84.0364 245.913 76.3156 248.216 76.3156C249.034 76.3156 249.333 77.0508 249.333 77.7127C249.333 78.303 249.182 78.669 249.11 79.1098L246.287 93.2992H249.925L251.412 85.9475C252.896 84.0379 258.393 76.3171 260.695 76.3171C261.435 76.3171 261.734 77.0523 261.734 77.7142C261.734 78.3045 261.586 78.6706 261.51 79.1114L258.687 93.3007H262.401L265.224 79.1114C265.447 78.155 265.596 77.2734 265.596 76.2424C265.596 74.3328 264.703 72.7892 262.55 72.7892C257.647 72.7892 253.338 79.4057 252.301 81.4648H252.077C252.447 80.2889 253.191 77.1987 253.191 76.2424C253.191 74.3328 252.225 72.7892 250.145 72.7892C245.242 72.7892 240.862 79.4057 239.896 81.4648H239.672L241.531 73.2285V73.2285Z" fill="#999999" />
</svg>


const SvgApple = () => <svg className="svg__apple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.255 608.728"><path d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z" fill="#999" /></svg>

const SvgCnet = () => <svg className="svg__cnet" xmlns="http://www.w3.org/2000/svg" viewBox="0.5 0.5 999 999.061"><path d="M311.523 798.362h34.79V231.177h-34.79v567.185z" fill="#999" /><path d="M311.523 798.362h34.79V231.177h-34.79v567.185zM168.753 437.79c.608-36.149 62.565-37.184 62.565-1.744l.568 30.735h47.36v-28.384c3.061-94.983-159.699-94.842-158.442-2.352v163.47c-1.257 92.49 161.544 94.82 158.645 0V565.21h-48.13v36.636c0 35.52-61.856 36.067-62.485 0v-165.8l-.08 1.743M439.33 400.83s8.272-12.266 29.945-24.269c27.471-15.226 54.354-.064 50.462-1.743 21.652 9.55 29.843 32.804 31.384 58.733v193.516h30.472v35.52h-78.358l-.049-231.285c0-33.736-56.909-32.682-57.457 1.581l.065-1.58v231.284h-70.31v-35.6l22.301.08V410.358l-26.458-.162v-35.378h67.816l.184 26.012M794.287 598.723c1.5 25.931 9.691 49.205 31.344 58.795-4.055-1.865 10.543 5.413 25.586 5.271 7.906-.203 46.104-.162 46.104-.162v-35.56s-19.26-.244-29.52-.163c-13.036.162-24.288-6.02-25.24-24.35l.13-192.015-.13-.346h46.244v-34.81h-46.387l.264-.568V300.35h-48.394v298.374M707.17 565.21v36.636c0 35.52-61.877 36.067-62.525 0v-76.27l101.674.064c4.805 0 8.778-3.934 8.778-8.819v-78.42c2.98-94.983-159.678-94.842-158.4-2.352v163.47c-1.276 92.49 161.543 94.82 158.562 0v-34.304h-48.09v-.005zm-62.525-129.408c.83-35.5 62.524-35.196 62.524.243l-.146 53.463-62.384.032v-53.747" fill="#999" /></svg>