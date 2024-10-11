import "./Events.css";

import { Link } from "react-router-dom";

import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

import sportsInfos from "@data/sportsInfo";

function Events() {
    return (
        <div className="events">
            <Navbar />
            <h2 className="heading">
                <span className="h1">UPCOMING</span>
                <span className="h2">EVENTS</span>
            </h2>
            <div className="event-container">
                {sportsInfos.map(function (sport) {
                    return (
                        <div key={sport.id} className="single-sport">
                            <div className="image">
                                <img
                                    src={sport.imgUrl}
                                    alt={`${sport.name} sport`}
                                />
                            </div>
                            <div className="sport-info">
                                <div className="name">{sport.name}</div>
                                <div className="desc">{sport.desc}</div>
                                <Link
                                    to={`/events/${sport.id}`}
                                    className="button"
                                >
                                    <button className="btn-primary">
                                        Register now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
}

export default Events;
