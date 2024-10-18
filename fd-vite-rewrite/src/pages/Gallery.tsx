import "./Gallery.css";

import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import SportsGallery from "@components/SportsGallery";

function Gallery() {
    return (
        <div className="gallery">
            <Navbar />
            <h1>
                <span className="h1">ASHVA</span>
                <span className="h1">MEDHA 2022</span>
            </h1>
            <SportsGallery />
            <Footer />
        </div>
    );
}

export default Gallery;
