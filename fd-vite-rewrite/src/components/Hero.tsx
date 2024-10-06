import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="content-hero">
                    <div className="hero-info">
                        <h1 className="ashvamedha">
                            <span className="ashva">ASHVA</span>MEDHA
                        </h1>
                        <p className="theme">EMPOWER ENDURE EXCEL</p>
                        <p className="date">4th-5th November</p>
                    </div>
                    <div className="buttons">
                        <Link to="/event" className="btn1">
                            <button className="btn-primary">
                                REGISTER NOW
                            </button>
                        </Link>
                        <div className="btn2">
                            <button className="btn-secondary">FIXTURES</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
