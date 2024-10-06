import "./Footer.css";

import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BiCopyright, BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

type SocialMediaHandle = {
    icon: JSX.Element;
    url: string;
    className: string;
};

function Footer() {
    const socialMediaHandles: Array<SocialMediaHandle> = [
        {
            icon: <AiOutlineInstagram className="icon" />,
            url: "https://www.instagram.com/ashvamedha_iitbbs/",
            className: "icons instagram",
        },
        {
            icon: <FaFacebookF className="icon" />,
            url: "https://www.facebook.com/AshvamedhaIITBBS/",
            className: "icons facebook",
        },
        {
            icon: <FaLinkedinIn className="icon" />,
            url: "https://www.linkedin.com/company/ashvamedha-iit-bhubaneswar/mycompany/",
            className: "icons linkedin",
        },
    ];

    return (
        <div className="footer">
            <div className="container">
                <div className="part1">
                    <div className="left">
                        <h1 className="title">
                            <span className="p1">ASHVA</span>
                            <span className="p2">MEDHA</span>
                        </h1>
                        <h2 className="desc">
                            The Annual Sports Fest of IIT Bhubaneswar
                        </h2>
                        <div className="social-media">
                            {socialMediaHandles.map(function (handle, index) {
                                return (
                                    <div
                                        className={handle.className}
                                        key={index}
                                        onClick={() =>
                                            window.open(handle.url, "_blank")
                                        }
                                    >
                                        {handle.icon}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="right">
                        <h2 className="address">Address</h2>
                        <p className="location">
                            <span>
                                <HiLocationMarker />
                            </span>
                            Gymkhana Office, IIT Bhubaneswar
                        </p>
                        <p className="call">
                            <span>
                                <BiSolidPhoneCall />
                            </span>
                            +91 8449485116
                        </p>
                        <p className="email">
                            <span>
                                <AiOutlineMail />
                            </span>
                            coord.ashvamedha@iitbbs.ac.in
                        </p>
                    </div>
                </div>
                <div className="part2">
                    <div className="bottom">
                        <BiCopyright />
                        <p className="copyright">
                            Ashvamedha,{" "}
                            <span className="p2">All Rights Reserved.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
