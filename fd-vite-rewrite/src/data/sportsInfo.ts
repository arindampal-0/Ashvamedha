import badmintonDemoImage from "@images/demoPhotos/badminton.jpg";
import basketballDemoImage from "@images/demoPhotos/basketball.jpg";
import chessDemoImage from "@images/demoPhotos/chess.jpg";
import footballDemoImage from "@images/demoPhotos/football.jpg";
import tabletennisDemoImage from "@images/demoPhotos/tt.jpg";
import volleyballDemoImage from "@images/demoPhotos/vb.jpg";
import badmintonEventImage from "@images/events/badminton.jpg";
import basketballEventImage from "@images/events/basketball.jpg";
import chessEventImage from "@images/events/chess.jpg";
import footballEventImage from "@images/events/football.jpg";
import tabletennisEventImage from "@images/events/tabletennis.jpg";
import volleyballEventImage from "@images/events/volleyball.jpg";

export type SportsInfo = {
    id: number;
    name: string;
    imgUrl: string;
    demoImgUrl: string;
    desc: string;
    longDesc: string;
    date: string;
    location: string;
    registrationLink: string;
    rulebook: string;
    poc: string;
};

const sportsInfos: Array<SportsInfo> = [
    {
        id: 1,
        name: "Chess",
        imgUrl: chessEventImage,
        demoImgUrl: chessDemoImage,
        desc: "Chess is the art of thinking ahead, of making complex decisions under pressure.",
        longDesc:
            "Chess, the game of intellect and strategy, challenges players to outthink their opponents, anticipate moves, and plan ahead. At the Ashvamedha Chess Championship we celebrate this timeless battle of wits. Whether you're a seasoned player or just starting, join us for two days of intense competition and camaraderie. Information regarding the event is given below.",
        date: "4th-5th October",
        location: "SECS Room No: 218, 219",
        registrationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSeNmRWHKw7EtnT9qHi1RQR9wtH4C9qmPTaGY9KRuHwmKY3gQQ/viewform?usp=sf_link",
        rulebook: "https://linktr.ee/ashvamedha.iitbbs",
        poc: "Devesh Patodkar",
    },
    {
        id: 2,
        name: "Badminton",
        imgUrl: badmintonEventImage,
        demoImgUrl: badmintonDemoImage,
        desc: "Badminton is not only about winning, it's about playing beautiful and memorable games.",
        longDesc:
            "Badminton is a sport that demands speed, agility, and fitness. Whether you're smashing shuttlecocks or diving for a crucial save, the Ashvamedha Badminton Championship promises intense rallies and thrilling matches. Join us on the court for a birdie-tastic showdown. Information regarding the event is given below.",
        date: "4th-5th November",
        location: "Inside SAC Badminton Court 1,2",
        registrationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfQCeZ8wOvee8Bsib_gDMM6h8qAxHkCR4GnQZQCtuPbmL6RPQ/viewform?usp=sf_link",
        rulebook: "https://linktr.ee/ashvamedha.iitbbs",
        poc: "Pranav P",
    },
    {
        id: 3,
        name: "Volleyball",
        imgUrl: volleyballEventImage,
        demoImgUrl: volleyballDemoImage,
        desc: "Success in volleyball comes not from individual glory but from seamless teamwork.",
        longDesc:
            "Volleyball is a dynamic team sport that demands coordination, agility, and teamwork. Whether you're spiking, blocking, or diving for a save, it's all about the thrill of the game. Join us for a spirited match at Ashvamedha Sports Arena. Information regarding the event is given below.",
        date: "4th-5th November",
        location: "Volleyball Court 1,2",
        registrationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSdZNWWyt43KqeVfyfwrqCBKLU24Yjs6xC1VTdGSLvT5hBCeXA/viewform?usp=sf_link",
        rulebook: "https://linktr.ee/ashvamedha.iitbbs",
        poc: "Justa Tirkey",
    },
    {
        id: 4,
        name: "Football",
        imgUrl: footballEventImage,
        demoImgUrl: footballDemoImage,
        desc: "Success is no accident, it is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing and learning to do.",
        longDesc:
            "Football, the world's most beloved sport, unites people through the joy of scoring goals and making breathtaking saves. At Ashvamedha, we bring the footbal community together for a thrilling tournament filling with skill, passion, and unforgettable moments. Information regarding the event is given below.",
        date: "4th-5th November",
        location: "Football Ground",
        registrationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSc2LLCqkKikPE8qUvW8eX3Rmp8GWkdcjXeoXIavFJUSOjCOlw/viewform?usp=sf_link",
        rulebook: "https://linktr.ee/ashvamedha.iitbbs",
        poc: "Megha Shyam",
    },
    {
        id: 5,
        name: "Basketball",
        imgUrl: basketballEventImage,
        demoImgUrl: basketballDemoImage,
        desc: "Basketball is like photography, if you don't focus, all you have is the negative.",
        longDesc:
            "Basketball is a fast-paced, high-flying game of strategy and skill. Dribble, pass, and shoot your way to victory in the Ashvamedha Basketball Championship. Join us on the court for slam dunks and three-pointers that will leave you in awe. Information regarding the event is given below.",
        date: "4th-5th November",
        location: "Basketball Court 1,2",
        registrationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLScZ59xCzIccTuFT4DQmOQJPpFEc0kId6C02FGHorU22KDyDFQ/viewform?usp=sf_link",
        rulebook: "https://linktr.ee/ashvamedha.iitbbs",
        poc: "Ayush Singh & Pranav P",
    },
    {
        id: 6,
        name: "Table Tennis",
        imgUrl: tabletennisEventImage,
        demoImgUrl: tabletennisDemoImage,
        desc: "The sound of ball hitting the table is the sound of opportunity, don't miss the shot.",
        longDesc: "Requires lightning-quick reflexes and precision. Ashvamedha's table tennis tournament is a showcase of spin serves, rallies, and impressive volleys. Come and experience the thrill of ping pong. Information regarding the event is given below.",
        date: "4th-5th November",
        location: "Inside SAC Multi-Purpose Hall",
        registrationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfktHYxmXIKN_iowh15gurxkvr8BKKoSigVkyIp7YVchMMgvA/viewform?usp=sf_link",
        poc: "Jatin Sahu",
        rulebook: "https://linktr.ee/ashvamedha.iitbbs",
    },
];

export default sportsInfos;
