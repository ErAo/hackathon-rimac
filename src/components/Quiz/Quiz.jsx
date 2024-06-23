"use client"
import { useState } from 'react';
import './Quiz.scss';
import QuizStart from '@/components/module/QuizStart/QuizStart';
import QuizLoader from '../module/QuizLoader/QuizLoader';
import ChatForm from '@/components/module/ChatForm/ChatForm';
import Input from '@/components/block/Input/Input';
import Image from 'next/image';
import sendIcon from '@/assets/img/send.svg';

export default function Quiz({data}) {
    const [step, setStep] = useState(0);
    const handleStart = () => {
        setStep(1);
    }
    const handleLoadQuiz = () => {
        setStep(2);
    }
    return (
        <div className="quiz">
            {step === 0 && <QuizStart handle={handleStart}/>}

            {step === 1 && 
            <ChatForm title="Estamos cargando tu experiencia" messages={[
                {
                    delay: 0,
                    content: "¡Nos alegra verte por aquí!"
                },
                {
                    delay: 1000,
                    content: "Para iniciar, indícanos tu nombre"
                }
            ]}>
                <Input type="text" placeholder="Escribe tu nombre aquí"/>
                <button className='button--icon button button--primary' disabled={false} onClick={handleLoadQuiz}>
                    <Image className='icon' src={sendIcon} alt="Send icon" />
                </button>
            </ChatForm>}

            {step === 2 && 
            <QuizLoader handle={()=> setStep(3)}/>}
        </div>
    )
}