import './Fade.scss'

export default function Fade({show, children, delay = 0}) {
    return (
        <div className={`fade${show ? ' fade--active': ''}`} style={{animationDelay: `${delay}s`}}>
            {children}
        </div>
    )
}