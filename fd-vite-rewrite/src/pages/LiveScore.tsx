import Navbar from "@components/Navbar";
import "./LiveScore.css";

import livePhoto from "@images/demoPhotos/live.png";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "@components/Footer";

type LiveScore = {
    college1Name: string;
    college1Score: number;
    college1Logo: string;
    college2Name: string;
    college2Score: number;
    college2Logo: string;
    matchName: string;
    category: string;
    editedBy: string;
    sportName: string;
    location: string;
    set: string;
};

enum Status {
    Loading = 0,
    Loaded,
    Failed
}

function LiveScore() {
    const [liveScore, setLiveScore] = useState<Array<LiveScore>>([]);
    const [status, setStatus] = useState<Status>(Status.Loading);

    const params = useParams();
    const { sportname } = params;

    useEffect(function () {
        async function fetchLiveScore() {
            setStatus(Status.Loading);
            try {
                const response = await fetch(
                    "https://ashvamedha.onrender.com/sport/getlivescore",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            sportname: sportname?.toLowerCase(),
                        }),
                        headers: { "Content-Type": "application/json" },
                    }
                );

                const data = await response.json();

                if (response.status === 200) {
                    setLiveScore(data.result.liveScoreInfo);
                    setStatus(Status.Loaded);
                } else {
                    setStatus(Status.Failed);
                }
            } catch (err) {
                console.error("error", err);
                setStatus(Status.Failed);
            }
        }

        fetchLiveScore();
    }, [sportname]);

    return <div className="score-page">
        <Navbar />
        <div className="live-score">
            <div className="sport-name">
                <div className="name">{sportname} <img style={{width: "2em"}} src={livePhoto} alt="live icon" /></div>
            </div>
            <div className="score-content">
                { status === Status.Loading && <span style={{color: "teal"}}>Loading...</span>}
                { status === Status.Loaded && liveScore.map(function(item, index) {
                    return <div key={index}>{item.matchName}</div>;
                })}
                { status === Status.Failed && <span style={{color: "red"}}>Failed to load scores</span>}
            </div>
        </div>
        <Footer />
    </div>;
}

export default LiveScore;
