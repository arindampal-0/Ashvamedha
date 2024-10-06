import "./AboutUs.css";

import CounterUpComp from "./CounterUpComp";

function AboutUs() {
    return (
        <div className="AboutUs">
            <div className="content">
                <div className="title">
                    <h1>
                        <span className="title1">ABOUT </span>
                        <span className="title2"> US</span>
                    </h1>
                </div>
                <div className="main-body">
                    <div className="logos">
                        {/* TODO: Add static logos later */}
                        <img
                            src="/images/logos/iitbbs-sports-council-logo.png"
                            alt="Sports Council Logo"
                            className="logo"
                        />
                        <img
                            src="/images/logos/iitbbs-logo.png"
                            alt="IITBBS Logo"
                            className="logo"
                        />
                        <img
                            src="/images/logos/ashvamedha-logo.png"
                            alt="Ashvamedha Logo"
                            className="logo"
                        />
                    </div>
                    <div className="description">
                        <p className="para">
                            Welcome to Ashvamedha, IIT Bhubaneswar's annual
                            sports fest. We are passionate about sports and
                            dedicated to promoting a culture of fitness,
                            competition, and camaraderie among the youth.
                        </p>
                        <p className="para">
                            Our fest offers a wide range of sports and
                            activities for participants of all skill levels.
                            Whether you are a seasoned athlete or just looking
                            for some fun, Ashvamedha has something for everyone.
                        </p>
                        <p className="para">
                            Join us for a week of excitement, sportsmanship, and
                            celebration. Let's come together to make Ashvamedha
                            2024 an unforgettable experience.
                        </p>
                    </div>
                </div>
            </div>
            <div className="counter">
                <CounterUpComp />
            </div>
            <div className="content">
                <div className="title">
                    <h1>
                        <span className="title1">OUR </span>
                        <span className="title2"> MERCHANDISE</span>
                    </h1>
                </div>
            </div>
            <div className="ath">
                {/* TODO: add merchandise logo */}
                <img src="/images/merchandise.png" alt="tshirt" />
            </div>
        </div>
    );
}

export default AboutUs;
