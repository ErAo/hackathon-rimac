import './Bubble.scss'
import { useState, useEffect } from 'react'

export default function Bubble({ 
    children, 
    show, 
    delay = 0,
    onShow = () => {}
}) {
    const [typing, setTyping] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setTyping(false)
            onShow()
        }, delay)
        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <div className={`bubble${show ? ' bubble--active' : ''}`}>
            {typing ?
                <div className="bubble__typing">
                    <div className="bubble__typing__dot"></div>
                    <div className="bubble__typing__dot"></div>
                    <div className="bubble__typing__dot"></div>
                </div>
                :
                <div className="bubble__content">
                    {children}
                </div>
            }
        </div>
    )
}