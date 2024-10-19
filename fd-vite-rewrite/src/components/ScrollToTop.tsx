import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const ref = useRef<HTMLDivElement | null>(null);
    const location = useLocation();
    useEffect(
        function () {
            if (location.hash === "") {
                if (ref.current) {
                    ref.current.scrollIntoView({ behavior: "smooth" });
                } else {
                    console.error("ref not set");
                }
            }
        },
        [location]
    );
    return <div ref={ref} id="scroll-to-top"></div>;
}

export default ScrollToTop;
