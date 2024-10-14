import "./OurTeam.css";

import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import TeamCard from "@components/TeamCard";

import { chiefCoordinator, coreHeads, teamMembers } from "@data/teamsInfo";

function OurTeam() {
    return (
        <div className="OurTeam">
            <Navbar />
            <h2 className="heading">
                <span className="h1">OUR</span>
                <span className="h2">TEAM</span>
            </h2>
            <div className="team-container">
                <div className="cards">
                    {/* Display Chief Coordinator outside the grid */}
                    <div className="chief-coordinator">
                        <TeamCard member={chiefCoordinator} />
                    </div>
                    <div className="coordinator">
                        {teamMembers.map(function (member, index) {
                            return <TeamCard member={member} key={index} />;
                        })}
                    </div>
                    <div className="coreheads">
                        {coreHeads.map(function (member, index) {
                            return <TeamCard member={member} key={index} />;
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default OurTeam;
