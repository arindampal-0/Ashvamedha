import "./Leaderboard.css";

import { useEffect, useState } from "react";
import { z } from "zod";

import CollegeScore from "@components/CollegeScore";
import Navbar from "@components/Navbar";

import collegesInfo from "@data/collegesInfo";
import Footer from "@components/Footer";

enum State {
    Loading = 0,
    Loaded,
    Failed,
}

type CollegeScore = {
    name: string;
    score: number;
};

const responseDataSchema = z.object({
    status: z.literal("ok"),
    result: z.tuple([z.number(), z.string()]),
    statusCode: z.number(),
});

function Leaderboard() {
    const [loadingScoreState, setLoadingScoreState] = useState<State>(
        State.Loading
    );
    const [collegeScores, setCollegeScores] = useState<Array<CollegeScore>>([]);

    async function fetchScore() {
        setLoadingScoreState(State.Loading);

        const promises = collegesInfo.map(function (college) {
            return fetch("https://ashvamedha.onrender.com/college/score", {
                method: "POST",
                body: JSON.stringify({ collegeName: college.name }),
                headers: { "Content-Type": "application/json" },
            });
        });
        const responses = await Promise.all(promises);
        // const array = responses.map(async function (response) {
        //     const data = await response.json();
        //     return data.result;
        // });
        responses.forEach(async function (response) {
            const data = await response.json();
            const parsedData = responseDataSchema.safeParse(data);
            if (parsedData.success) {
                setCollegeScores((prev) => [
                    ...prev,
                    {
                        name: parsedData.data.result[1],
                        score: parsedData.data.result[0],
                    },
                ]);
            }
        });
    }

    useEffect(function () {
        fetchScore()
            .then(() => setLoadingScoreState(State.Loaded))
            .catch(() => setLoadingScoreState(State.Failed));
    }, []);

    return (
        <div>
            <Navbar />
            <div className="leaderboard">
                <div className="heading">
                    <h2 className="text">
                        <span className="h1">POINTS</span>
                        <span className="h2">TABLE</span>
                    </h2>
                </div>
                <div className="content">
                    {loadingScoreState === State.Loading && (
                        <span style={{ color: "white" }}>Loading...</span>
                    )}
                    {loadingScoreState === State.Failed && (
                        <span style={{ color: "red" }}>
                            Failed loading college scores
                        </span>
                    )}
                    {loadingScoreState === State.Loaded &&
                        collegeScores
                            .sort((c1, c2) => c2.score - c1.score)
                            .map(function (collegeInfo, index) {
                                return (
                                    <CollegeScore
                                        collegeInfo={collegeInfo}
                                        index={index + 1}
                                        key={collegeInfo.name}
                                    />
                                );
                            })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Leaderboard;
