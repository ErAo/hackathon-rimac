import './MultiSteps.scss'
import { useState, useEffect } from 'react'

export default function MultiSteps({ step, children, onStepChange = () => {} }) {
    const [currentStep, setCurrentStep] = useState(step - 1)

    useEffect(() => {
        setCurrentStep(step - 1)
        onStepChange(step, children[step - 1], children[currentStep])
    }, [step])

    return (
        children[currentStep]
    )
}