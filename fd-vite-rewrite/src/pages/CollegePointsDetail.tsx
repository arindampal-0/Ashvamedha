/* eslint-disable react-hooks/exhaustive-deps */
import "./CollegePointsDetail.css";

import env from "@env";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { z } from "zod";

import PointInfo, {
    collegePointInfoSchema,
} from "@components/CollegePointInfo";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

enum LoadingState {
    Init = 0,
    Loading,
    Loaded,
    Failed,
}

const responseDataSchema = z.object({
    status: z.literal("ok"),
    result: z.object({
        modifiedResult: z.array(collegePointInfoSchema),
    }),
    statusCode: z.number(),
});

function CollegePointsDetail() {
    const params = useParams();
    const collegeName = params.collegename;

    const [loadingState, setLoadingScoreState] = useState<LoadingState>(
        LoadingState.Init
    );
    const [pointsInfo, setPointsInfo] = useState<
        Array<z.infer<typeof collegePointInfoSchema>>
    >([]);

    useEffect(
        function () {
            async function fetchCollegePointsDetail() {
                setLoadingScoreState(LoadingState.Loading);

                const url = new URL("college", env.VITE_SERVER_BASE_URL);

                const response = await fetch(url.href, {
                    method: "POST",
                    body: JSON.stringify({ collegeName: collegeName }),
                    headers: { "Content-Type": "application/json" },
                });

                const data = await response.json();
                const parsedData = responseDataSchema.safeParse(data);

                if (parsedData.success) {
                    setPointsInfo(parsedData.data.result.modifiedResult);
                }
            }

            if (loadingState === LoadingState.Init) {
                fetchCollegePointsDetail()
                    .then(() => setLoadingScoreState(LoadingState.Loaded))
                    .catch(() => setLoadingScoreState(LoadingState.Failed));
            }
        },
        [collegeName]
    );

    return (
        <div className="pd">
            <Navbar />
            {loadingState !== LoadingState.Loaded ? (
                <div className="wrapper">
                    {loadingState === LoadingState.Loading && (
                        <h2 style={{ color: "white" }}>Loading...</h2>
                    )}
                    {loadingState === LoadingState.Failed && (
                        <h2 style={{ color: "red" }}>
                            Failed loading team scores.
                        </h2>
                    )}
                </div>
            ) : pointsInfo.length === 0 ? (
                <div className="wrapper">
                    <h2 className="text_shadows">Your team is yet to score</h2>
                </div>
            ) : (
                <div className="main">
                    <h2 className="heading-point">
                        <span className="h1">POINT</span>
                        <span className="h2">TABLE</span>
                    </h2>
                    <div className="pointdetail">
                        {pointsInfo.map(function (pointInfo, index) {
                            return (
                                <PointInfo
                                    collegePointInfo={pointInfo}
                                    index={index + 1}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default CollegePointsDetail;
