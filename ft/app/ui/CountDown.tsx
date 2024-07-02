"use client";
import React from 'react';
import {CountdownCircleTimer} from "react-countdown-circle-timer";

interface CountDownProps {
    initialRemainingTime?: number
    duration?: number
    strokeWidth?: number
    rotation?: "clockwise" | "counterclockwise"
    shouldRepeat?: boolean
    delay?: number
    onComplete?: () => void
}

const CountdownTimer: React.FC<CountDownProps> = props => {

        const duration = props.duration ? props.duration : 5
        const initRemainingTime = props.initialRemainingTime ? props.initialRemainingTime : duration
        const strokeWidth = props.strokeWidth ? props.strokeWidth : undefined
        const rotation = props.rotation ? props.rotation : undefined
        const shouldRepeat = props.shouldRepeat ? props.shouldRepeat : false
        const delay = props.delay ? props.delay : 5
        const onComplete = props.onComplete ? props.onComplete : () => {}



        return (
                <div>
                    <CountdownCircleTimer
                        isPlaying
                        duration={duration}
                        initialRemainingTime={initRemainingTime}
                        strokeWidth={strokeWidth}
                        rotation={rotation}
                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[7, 5, 2, 0]}
                        onComplete={() => {
                            onComplete()
                            return ({ shouldRepeat: true, delay: duration })}}
                    >
                        {({ remainingTime }) => <span className={"text-6xl font-bold"}>{remainingTime}</span>}
                    </CountdownCircleTimer>
                </div>




        )
}

    ;

export default CountdownTimer;