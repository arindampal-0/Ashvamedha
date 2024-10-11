import "./UpcomingMatch.css";

import { useEffect, useState } from "react";
import { VscClose } from "react-icons/vsc";

type Props = {
    closePopup: () => void;
    fixtureImgName: string;
};

function UpcomingMatch(props: Props) {
    const [fixtureImageUrl, setFixtureImageUrl] = useState<string | null>(null);

    useEffect(
        function () {
            async function getFixtureImage() {
                const response = await fetch(
                    "https://ashvamedha.onrender.com/upload/name",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            folderName: "4th-nov-fixtures",
                            name: props.fixtureImgName,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.status === 200) {
                    const data = await response.json();
                    // console.log(data);

                    const imageUrl = data.result[0].image.url;
                    if (imageUrl) {
                        console.log(imageUrl);
                        setFixtureImageUrl(imageUrl);
                    }
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
                {fixtureImageUrl ? (
                    <img
                        src={fixtureImageUrl}
                        alt="fixture image"
                        className="images"
                    />
                ) : (
                    <span style={{ color: "white" }}>Loading...</span>
                )}
            </div>
        </div>
    );
}

export default UpcomingMatch;
