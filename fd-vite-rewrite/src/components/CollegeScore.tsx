import "./CollegeScore.css";

import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";

interface Props {
    index: number;
    collegeInfo: { name: string; score: number };
}

function CollegeScore(props: Props) {
    return (
        <div className="collegewrapper">
            <div className="serial-no">{props.index}</div>
            <div className="collegename">{props.collegeInfo.name}</div>
            <div className="score">{props.collegeInfo.score}</div>
            <Link to={`/leaderboard/${props.collegeInfo.name}`}>
                <AiOutlineDoubleRight />
            </Link>
        </div>
    );
}

export default CollegeScore;
