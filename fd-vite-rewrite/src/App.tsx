// import { SyncLoader } from "react-spinners";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <>
            {/* <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%"}}>
                <SyncLoader color="#030027" loading={true} margin={5} size={15} speedMultiplier={1} cssOverride={{display: "block", margin: "0 auto", borderColor: "red"}} />
            </div> */}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
