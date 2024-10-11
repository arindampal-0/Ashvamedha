import "./SingleSport.css";

import { useEffect, useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import UpcomingMatch from "@components/UpcomingMatch";

import sportsInfos, { SportsInfo } from "@data/sportsInfo";

function SingleSport() {
    const params = useParams();
    const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);
    const { sportsId } = params;

    const [sportsInfo, setSportsInfo] = useState<SportsInfo | null>(null);

    useEffect(
        function () {
            if (sportsId) {
                // console.log(parseInt(sportsId));
                const sportsInfo = sportsInfos.find(
                    (value) => value.id === Number(sportsId)
                );
                if (sportsInfo) {
                    setSportsInfo(sportsInfo);
                }
            } else {
                console.error("sportsId is null");
            }
        },
        [sportsId]
    );

    return (
        <div className="single-sport-page">
            <Navbar />
            {sportsInfo !== null && (
                <div className="sportspage">
                    <div className="popup-content">
                        <div
                            className="match-popup"
                            onClick={() =>
                                setIsPopUpOpen((prevState) => !prevState)
                            }
                        >
                            <h2 className="hover-link">Upcoming Matches</h2>
                            <AiOutlineDoubleRight className="next" />
                        </div>
                        <Link
                            to={`/livescore/${sportsInfo.name}`}
                            className="match-liveScore"
                        >
                            <h2 className="hover-link">Live Score</h2>
                            <AiOutlineDoubleRight className="next" />
                        </Link>
                        {isPopUpOpen && (
                            <UpcomingMatch
                                closePopup={() => setIsPopUpOpen(false)}
                                fixtureImgName={sportsInfo.fixtureImgName}
                            />
                        )}
                    </div>
                    <div className="cards">
                        <div className="sports-info">
                            <h1 className="name">{sportsInfo.name}</h1>
                            <p className="desc">{sportsInfo.longDesc}</p>
                            <p className="poc">
                                <span className="highlight">
                                    Person of Contact:
                                </span>{" "}
                                {sportsInfo.poc}
                            </p>
                            <p className="venue">
                                <span className="highlight">Location: </span>{" "}
                                {sportsInfo.location}
                            </p>
                            <p className="date">
                                <span className="highlight">Date: </span>{" "}
                                {sportsInfo.date}
                            </p>
                            <p className="rulebook">
                                <span className="highlight">
                                    Rulebook:{" "}
                                    <a
                                        className=""
                                        href={sportsInfo.rulebook}
                                        target="_blank"
                                    >
                                        Click here
                                    </a>
                                </span>
                            </p>
                        </div>
                        <div className="sports-img">
                            <img
                                src={sportsInfo.demoImgUrl}
                                alt={`${sportsInfo.name} image`}
                            />
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default SingleSport;
