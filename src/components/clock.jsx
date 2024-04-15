import { useEffect, useState } from 'react'
import './clock.css'

export default function Clock() {
    const [time, setTime] = useState(new Date())

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    })

    return (
        <div className="clock-container">
            <div className="clock-date">
                {
                    Capitalize(time.toLocaleDateString(undefined, {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }))
                }
            </div>

            <div className="clock-time">
                <span>{time.getHours().toString().padStart(2, '0')}</span>:
                <span>{time.getMinutes().toString().padStart(2, '0')}</span>:
                <span>{time.getSeconds().toString().padStart(2, '0')}</span>
            </div>
        </div>
    )
}