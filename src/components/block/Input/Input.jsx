"use client"
import { useState } from 'react'
import './input.scss'

export default function Input({
    label, 
    labelClass = '', 
    inputMode = false, 
    updateValue = () => {},
    ...props}) {

    const [value, setValue] = useState('')

    const removeLetters = (currentValue) => {
        return isNaN(currentValue) ? value : currentValue
        
    }

    const handleKeyUp = (e) => {
        if(inputMode === 'numeric') {
            const newValue = removeLetters(e.target.value)
            setValue(newValue)
            updateValue(props.name, newValue)
        }
    }

    return (
        <label className={`input_text${label ? " input_text--label": ' input_text--rounded'}`}>
            <input 
                className={`input_text__input${value.length > 0 ? ' input_text__input--active' : ''}`}
                {...props} onKeyUp={handleKeyUp}/>
            {label && <span className={labelClass ? labelClass : `input_text__label`} data-label={label}>
                {label}
            </span>}
        </label>
    )
}