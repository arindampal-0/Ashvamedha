import image01 from "@images/gallery/image01.jpg";
import image02 from "@images/gallery/image02.jpg";
import image03 from "@images/gallery/image03.jpg";
import image04 from "@images/gallery/image04.jpg";
import image05 from "@images/gallery/image05.jpg";
import image06 from "@images/gallery/image06.jpg";
import image07 from "@images/gallery/image07.png";
import image08 from "@images/gallery/image08.jpg";
import image09 from "@images/gallery/image09.jpg";
import image10 from "@images/gallery/image10.jpg";
import image11 from "@images/gallery/image11.jpg";
import image12 from "@images/gallery/image12.jpg";
import image13 from "@images/gallery/image13.jpg";
import image14 from "@images/gallery/image14.jpg";
import image15 from "@images/gallery/image15.jpg";
import image16 from "@images/gallery/image16.jpg";
import image17 from "@images/gallery/image17.jpg";
import image18 from "@images/gallery/image18.jpg";
import image19 from "@images/gallery/image19.jpg";
import image20 from "@images/gallery/image20.jpg";
import image21 from "@images/gallery/image21.jpg";
import image22 from "@images/gallery/image22.jpg";
import image23 from "@images/gallery/image23.jpg";
import image24 from "@images/gallery/image24.jpg";
import image25 from "@images/gallery/image25.jpg";
import image26 from "@images/gallery/image26.jpg";
import image27 from "@images/gallery/image27.png";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

type GalleryPhoto = { cname: string; isHeading: boolean } & (
    | {
          cname: string;
          isHeading: false;
          imgScr: string;
          imgText: string;
      }
    | {
          cname: string;
          isHeading: true;
          text: string;
      }
);

function SportsGallery() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentModalImage, setCurrentModalImage] =
        useState<GalleryPhoto | null>(null);

    const galleryPhotos: Array<GalleryPhoto> = [
        {
            cname: "w-3 h-2",
            isHeading: false,
            imgScr: image01,
            imgText: "Nature",
        },
        {
            cname: "w-3 h-3",
            isHeading: false,
            imgScr: image02,
            imgText: "People",
        },
        {
            cname: "h-2",
            isHeading: false,
            imgScr: image03,
            imgText: "Sports",
        },
        {
            cname: "w-2",
            isHeading: true,
            text: "CLOSING CEREMONY",
        },
        {
            cname: "w-4 h-1",
            isHeading: false,
            imgScr: image04,
            imgText: "Food",
        },
        {
            cname: "",
            isHeading: false,
            imgScr: image05,
            imgText: "Travel1",
        },
        {
            cname: "",
            isHeading: false,
            imgScr: image06,
            imgText: "Travel2",
        },
        {
            cname: "h-2",
            isHeading: false,
            imgScr: image07,
            imgText: "Art",
        },
        {
            cname: "h-2",
            isHeading: false,
            imgScr: image08,
            imgText: "Car1",
        },
        {
            cname: "w-2 h-3",
            isHeading: false,
            imgScr: image09,
            imgText: "car3",
        },
        {
            cname: "w-1 h-3",
            isHeading: false,
            imgScr: image10,
            imgText: "Car4",
        },
        {
            cname: "w-3 h-2",
            isHeading: false,
            imgScr: image11,
            imgText: "Car5",
        },
        {
            cname: "w-3 h-2",
            isHeading: false,
            imgScr: image12,
            imgText: "Car6",
        },
        {
            cname: "w-1 h-1",
            isHeading: false,
            imgScr: image13,
            imgText: "Car7",
        },
        {
            cname: "w-1 h-3",
            isHeading: false,
            imgScr: image14,
            imgText: "Car8",
        },
        {
            cname: "w-2 h-2",
            isHeading: false,
            imgScr: image15,
            imgText: "Car10",
        },
        {
            cname: "w-3 h-2",
            isHeading: false,
            imgScr: image16,
            imgText: "Car11",
        },
        {
            cname: "w-2 h-1",
            isHeading: true,
            text: "CELEBRATIONS",
        },
        {
            cname: "w-3 h-2",
            isHeading: false,
            imgScr: image17,
            imgText: "Nature",
        },
        {
            cname: "w-3 h-3",
            isHeading: false,
            imgScr: image18,
            imgText: "People",
        },
        {
            cname: "h-2 w-2",
            isHeading: false,
            imgScr: image19,
            imgText: "Sport1",
        },
        {
            cname: "w-2",
            isHeading: true,
            text: "EVENTS",
        },
        {
            cname: "w-4 h-2",
            isHeading: false,
            imgScr: image20,
            imgText: "Food1",
        },
        {
            cname: "w-2 h-3",
            isHeading: false,
            imgScr: image21,
            imgText: "Food2",
        },
        {
            cname: "",
            isHeading: false,
            imgScr: image22,
            imgText: "Travel",
        },
        {
            cname: "w-3 h-2",
            isHeading: false,
            imgScr: image23,
            imgText: "Car13",
        },
        {
            cname: "w-3 h-2",
            isHeading: false,
            imgScr: image24,
            imgText: "Car13",
        },
        {
            cname: "w-2 h-1",
            isHeading: false,
            imgScr: image25,
            imgText: "Car14",
        },
        {
            cname: "w-2 h-1",
            isHeading: false,
            imgScr: image26,
            imgText: "Car-13",
        },
        {
            cname: "w-2",
            isHeading: false,
            imgScr: image27,
            imgText: "Car-18",
        },
    ];

    return (
        <div className="container-gallery">
            {currentModalImage !== null && (
                <div className={isModalOpen ? "model open" : "model"}>
                    {!currentModalImage.isHeading && (
                        <>
                            <img src={currentModalImage.imgScr} alt="image" />
                            <AiOutlineClose
                                className="icon"
                                onClick={function () {
                                    setIsModalOpen(false);
                                    setCurrentModalImage(null);
                                }}
                            />
                        </>
                    )}
                </div>
            )}
            {galleryPhotos.map(function (item) {
                return (
                    // <div className={`gallery-container ${item.cname}`}>
                    item.isHeading ? (
                        <div className={`gallery-container ${item.cname}`}>
                            <div className="heading">{item.text}</div>
                        </div>
                    ) : (
                        <div className={`gallery-container ${item.cname}`}>
                            <div
                                className="gallery-item"
                                onClick={function () {
                                    setCurrentModalImage(item);
                                    setIsModalOpen(true);
                                }}
                            >
                                <div className="image">
                                    <img src={item.imgScr} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                    // </div>
                );
            })}
        </div>
    );
}

export default SportsGallery;
