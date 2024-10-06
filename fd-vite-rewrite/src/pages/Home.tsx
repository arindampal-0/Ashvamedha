import "./Home.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="Home">
            <Navbar />
            <Hero />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default Home;
