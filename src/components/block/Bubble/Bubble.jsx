import './Bubble.scss'

export default function Bubble({ children }) {
    return (
        <div className="bubble">
            <div className="bubble__content">
                {children}
            </div>
        </div>
    )
}