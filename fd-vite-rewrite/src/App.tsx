import "./index.css";

// import { SyncLoader } from "react-spinners";
import { Route, Routes } from "react-router-dom";

import Events from "@pages/Events";
import Home from "@pages/Home";
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
            </Routes>
        </>
    );
}

export default App;
