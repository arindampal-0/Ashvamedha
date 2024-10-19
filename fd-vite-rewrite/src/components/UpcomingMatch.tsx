import "./UpcomingMatch.css";

import env from "@env";

import { useEffect, useState } from "react";
import { VscClose } from "react-icons/vsc";

type Props = {
    closePopup: () => void;
    fixtureImgName: string;
};

enum Status {
    Loading = 0,
    Loaded,
    Failed,
}

function UpcomingMatch(props: Props) {
    const [fixtureImageUrl, setFixtureImageUrl] = useState<string | null>(null);
    const [status, setStatus] = useState<Status>(Status.Loading);

    const url = new URL("upload/name", env.VITE_SERVER_BASE_URL);

    useEffect(
        function () {
            async function getFixtureImage() {
                setStatus(Status.Loading);
                try {
                    const response = await fetch(url.href, {
                        method: "POST",
                        body: JSON.stringify({
                            folderName: "4th-nov-fixtures",
                            name: props.fixtureImgName,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    if (response.status === 200) {
                        const data = await response.json();
                        // console.log(data);

                        const imageUrl = data.result[0].image.url;
                        if (imageUrl) {
                            console.log(imageUrl);
                            setFixtureImageUrl(imageUrl);
                            setStatus(Status.Loaded);
                        } else {
                            console.error("imageUrl is null");
                            setStatus(Status.Failed);
                        }
                    } else {
                        console.error("response.status !== 200");
                        setStatus(Status.Failed);
                    }
                } catch (err) {
                    console.error("error", err);
                    setStatus(Status.Failed);
                }
            }

            getFixtureImage();
        },
        [props.fixtureImgName]
    );

    useEffect(
        function () {
            console.log(fixtureImageUrl);
        },
        [fixtureImageUrl]
    );

    return (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={props.closePopup}>
                    <VscClose className="close" />
                </button>
                {status === Status.Loaded && fixtureImageUrl && (
                    <img
                        src={fixtureImageUrl}
                        alt="fixture image"
                        className="images"
                    />
                )}
                {status === Status.Loading && (
                    <span style={{ color: "white" }}>Loading...</span>
                )}
                {status === Status.Failed && (
                    <span style={{ color: "red" }}>
                        Failed to load Upcoming matches!
                    </span>
                )}
            </div>
        </div>
    );
}

export default UpcomingMatch;
