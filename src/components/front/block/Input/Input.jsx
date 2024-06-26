"use client"
import { useState } from 'react'
import './Input.scss'

export default function Input({
    label, 
    labelClass = '', 
    inputMode = false, 
    onUpdate = () => {},
    ...props}) {

    const [value, setValue] = useState('')

    const removeLetters = (currentValue) => {
        return isNaN(currentValue) ? value : currentValue
        
    }

    const handleKeyUp = (e) => {
        if(inputMode === 'numeric') {
            const newValue = removeLetters(e.target.value)
            setValue(newValue)
            onUpdate(props.name, newValue)
        }else{
            onUpdate(props.name, e.target.value)
        }
    }

    return (
        <label className={`input_text${label ? " input_text--label": ' input_text--rounded'}`}>
            <input 
                className={`input_text__input${value.length > 0 ? ' input_text__input--active' : ''}`}
                {...props} 
                onChange={handleKeyUp} 
                defaultValue={value}/>

            {label && <span className={labelClass ? labelClass : `input_text__label`} data-label={label}>
                {label}
            </span>}
        </label>
    )
}