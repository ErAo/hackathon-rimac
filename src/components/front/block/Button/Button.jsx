export default function Button({ label, className, ...props }) {
    return (
        <button className={`button ${className}`} {...props}>{label}</button>
    )
}