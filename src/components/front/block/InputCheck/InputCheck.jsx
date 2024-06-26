import './InputCheck.scss'
export default function InputCheck({ 
    type = 'checkbox',
    children,
    ...props 
}) {

    return (
        <label className="input_check">
            <input 
                className="input_check__input"
                type={type}
                {...props}
                />
            <span className="input_check__fake-checkbox"></span>
            <span className="input_check__label">{children}</span>
        </label>
    )
}