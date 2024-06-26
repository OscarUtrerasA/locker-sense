'use client'
import React from 'react'
import './Countdown.css'
import { useEffect, useState } from 'react'

export type CountdownProps = {
    seconds: number
}

const Countdown: React.FC<CountdownProps> = ({ seconds }) => {
    const svgCircleStyle = {
        animation: `countdown ${seconds}s linear forwards`,
    }
    const [countdown, setCountdown] = useState(seconds)

    useEffect(() => {
        const countdownNumberEl = document.getElementById('countdown-number')

        if (countdownNumberEl) {
            countdownNumberEl.textContent = countdown.toString()

            const intervalId = setInterval(() => {
                setCountdown((prevCountdown) => {
                    if (prevCountdown <= 1) {
                        clearInterval(intervalId) // Clear interval when countdown reaches 0
                        countdownNumberEl.textContent = '0'
                        return 0
                    } else {
                        const newCountdown = prevCountdown - 1
                        countdownNumberEl.textContent = newCountdown.toString()
                        return newCountdown
                    }
                })
            }, 1000)

            return () => clearInterval(intervalId) // Clear interval on component unmount
        }
    }, [])
    return (
        <div id="countdown">
            <div id="countdown-number">{countdown}</div>
            <svg id="svg-countdown">
                <circle
                    id="svg-circle"
                    style={svgCircleStyle}
                    cx="5vw"
                    cy="5vw"
                    r="5vw"
                ></circle>
            </svg>
        </div>
    )
}

export default Countdown
