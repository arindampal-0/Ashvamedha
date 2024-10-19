import "./index.css";

// import { SyncLoader } from "react-spinners";
import { Route, Routes } from "react-router-dom";

import CollegePointsDetail from "@pages/CollegePointsDetail";
import Events from "@pages/Events";
import Gallery from "@pages/Gallery";
import Home from "@pages/Home";
import Leaderboard from "@pages/Leaderboard";
import LiveScore from "@pages/LiveScore";
import OurTeam from "@pages/OurTeam";
import SingleSport from "@pages/SingleSport";

function App() {
    return (
        <>
            {/* <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%"}}>
                <SyncLoader color="#030027" loading={true} margin={5} size={15} speedMultiplier={1} cssOverride={{display: "block", margin: "0 auto", borderColor: "red"}} />
            </div> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:sportsId" element={<SingleSport />} />
                <Route path="/livescore/:sportname" element={<LiveScore />} />
                <Route path="/team" element={<OurTeam />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route
                    path="/leaderboard/:collegename"
                    element={<CollegePointsDetail />}
                />
            </Routes>
        </>
    );
}

export default App;
