import './Bubble.scss'

export default function Bubble({ children, show }) {
    return (
        <div className={`bubble${show ? ' bubble--active' : ''}`}>
            <div className="bubble__content">
                {children}
            </div>
        </div>
    )
}