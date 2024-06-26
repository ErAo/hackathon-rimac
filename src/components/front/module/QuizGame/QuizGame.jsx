import './QuizGame.scss'
import { useState } from 'react'
import Swipe from '@/components/front/block/Swipe/Swipe'
import Poll from '@/components/front/module/Poll/Poll'
import Image from 'next/image'
import chevronLeft from '@/assets/img/chevron-left.svg'

export default function QuizGame({ data, handle }) {
    const [step, setStep] = useState(1);
    const [quizData, setQuizData] = useState({});
    const components = data.experience.components || [];

    const handleLastStep = (data) => {
        handle(Object.values(data))
    }

    const handleChangeStep = (step, newData)=> {
        if(components.length < step) {
            return handleLastStep(newData)
        }
        setStep(step)
    }

    const handleSwipeValue = (value, step) => {
        const newData = {
            ...quizData,
            [step] : value
        }
        setQuizData({...newData})
        handleChangeStep(step + 1, newData)
    }

    const handlePollSelection = (value, step) => {
        const newData = {
            ...quizData,
            [step] : value
        }
        setQuizData({...newData})
        handleChangeStep(step + 1, newData)
    }

    const handleBack = () => {
        if(step === 1) {
            return 
        }
        setStep(step - 1)
    }

    return (
        <div className="quiz_game">
            <div className="quiz_game__header">
                <div className="quiz_game__header__back">
                    <button className='quiz_game__header__back__button' onClick={handleBack}>
                        <Image src={chevronLeft} width={14} height={14} alt='Icon chevron left'/>
                        Anterior
                    </button>
                </div>
                <div className="quiz_game__header__logo">
                    <Image src='/rimac-iso.png' width={45} height={16} alt='Rimac red iso'/>
                </div>
            </div>
            <div className="quiz_game__wrapper">
                {components.map((component, index) => (
                   <div key={index} className={`quiz_game__step${step === index + 1 ? ' quiz_game__step--active' : ''}`} data-step={index + 1}>
                        {component.type === 'Poll' && <Poll data={component} onSelected={handlePollSelection} step={index + 1}/>}
                        {component.type === 'Swipe' && <Swipe onSwipeLeft={handleSwipeValue} onSwipeRight={handleSwipeValue} data={component} step={index + 1} />}
                    </div>
                ))}
            </div>
        </div>
    )
}