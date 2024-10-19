import "./CollegePointInfo.css";

import { z } from "zod";

// eslint-disable-next-line react-refresh/only-export-components
export const collegePointInfoSchema = z.object({
    sportName: z.string(),
    catergory: z.string(),
    matchName: z.string(),
    college1: z.string(),
    college2: z.string(),
    point: z.number(),
    collegeWon: z.string(),
    editedBy: z.string(),
});

interface Props {
    collegePointInfo: z.infer<typeof collegePointInfoSchema>;
    index: number;
}

function PointInfo(props: Props) {
    return (
        <div className="pointinfo">
            <div className="serial-no">{props.index}</div>
            <div className="category">
                Category: {props.collegePointInfo.catergory}
            </div>
            <div className="opponent">
                <span className="vs">Vs</span>
                <span className="name">{props.collegePointInfo.college1}</span>
            </div>
            <div className="point">Point: {props.collegePointInfo.point}</div>
            <div className="sportname">
                Sport: {props.collegePointInfo.sportName}
            </div>
        </div>
    );
}

export default PointInfo;
