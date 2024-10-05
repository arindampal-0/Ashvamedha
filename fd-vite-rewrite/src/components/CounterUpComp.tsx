import "./CounterUpComp.css";

import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";

type CounterProperty = {
    title: string;
    start: number;
    end: number;
    duration: number;
    addPlus: boolean;
};

function CounterUpComp() {
    const [counterOn, setCounterOn] = useState<boolean>(false);
    const countersProperties: Array<CounterProperty> = [
        {
            title: "SPORTS",
            start: 1,
            end: 7,
            duration: 1,
            addPlus: false,
        },
        {
            title: "COLLEGES",
            start: 10,
            end: 12,
            duration: 2,
            addPlus: false,
        },
        {
            title: "PARTICIPANTS",
            start: 100,
            end: 1000,
            duration: 2,
            addPlus: true,
        },
        {
            title: "FOOTFALL",
            start: 1000,
            end: 5000,
            duration: 2,
            addPlus: true,
        },
    ];

    return (
        <>
            <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
            >
                <div className="counterUpRow">
                    {countersProperties.map(function (counterProp, index) {
                        return (
                            <div className="counterUp" key={index}>
                                <h1>
                                    {counterOn && (
                                        <CountUp
                                            start={counterProp.start}
                                            end={counterProp.end}
                                            duration={counterProp.duration}
                                            delay={0}
                                        />
                                    )}
                                    {counterProp.addPlus && "+"}
                                </h1>
                                <p>{counterProp.title}</p>
                            </div>
                        );
                    })}
                </div>
            </ScrollTrigger>
        </>
    );
}

export default CounterUpComp;
