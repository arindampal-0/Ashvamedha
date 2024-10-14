import sponsCoordinatorImage from "@images/ourTeam/AnuragBarman.jpg";
import agCoreHead from "@images/ourTeam/ArihantGarg.jpg";
import asCoreHead from "@images/ourTeam/AyushSingh.jpg";
import publicityCoordinatorImage from "@images/ourTeam/DamtakLigu.jpg";
import chiefCoordinatorImage from "@images/ourTeam/DeepanshuChoudhary.jpg";
import dpCoreHead from "@images/ourTeam/DeveshPatodkar.jpg";
import webndCoordinatorImage from "@images/ourTeam/MeenalCNimje.jpg";
import nmCoreHead from "@images/ourTeam/NatashaMukherjee.jpg";
import rCoreHead from "@images/ourTeam/Ram.jpg";
import eventsCoordinatorImage from "@images/ourTeam/Sarlongki.jpg";

export type TeamInfo = {
    name: string;
    position: string;
    image: string;
    phoneNo: string;
};

export const chiefCoordinator: TeamInfo = {
    name: "Deepanshu Choudhary",
    position: "Chief Coordinator",
    image: chiefCoordinatorImage,
    phoneNo: "+91 8449485116",
};

export const teamMembers: Array<TeamInfo> = [
    {
        name: "Damtak Ligu",
        position: "Publicity Coordinator",
        image: publicityCoordinatorImage,
        phoneNo: "+91 7630956265",
    },
    {
        name: "Sarlongki",
        position: "Events Coordinator",
        image: eventsCoordinatorImage,
        phoneNo: "+91 8135071971",
    },
    {
        name: "Anurag Barman",
        position: "Spons Coordinator",
        image: sponsCoordinatorImage,
        phoneNo: "+91 7099537740",
    },
    {
        name: "Meenal C Nimje",
        position: "Web&D Coordinator",
        image: webndCoordinatorImage,
        phoneNo: "+91 8591182265",
    },
];

export const coreHeads: Array<TeamInfo> = [
    {
        name: "Arihant Garg",
        position: "Core Head",
        image: agCoreHead,
        phoneNo: "+91 8448861199",
    },
    {
        name: "Ayush Singh",
        position: "Core Head",
        image: asCoreHead,
        phoneNo: "+91 7078421798",
    },
    {
        name: "Natasha Mukherjee",
        position: "Core Head",
        image: nmCoreHead,
        phoneNo: "+91 9959533758",
    },
    {
        name: "Ram",
        position: "Core Head",
        image: rCoreHead,
        phoneNo: "+91 8328537734",
    },
    {
        name: "Devesh Patodkar",
        position: "Core Head",
        image: dpCoreHead,
        phoneNo: "+91 8379957983",
    },
];
