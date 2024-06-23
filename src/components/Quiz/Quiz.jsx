"use client"
import { useState } from 'react';
import './Quiz.scss';
import QuizStart from '@/components/module/QuizStart/QuizStart';
import QuizLoader from '@/components/module/QuizLoader/QuizLoader';
import QuizGame from '@/components/module/QuizGame/QuizGame';
import ChatForm from '@/components/module/ChatForm/ChatForm';
import Input from '@/components/block/Input/Input';
import Image from 'next/image';
import sendIcon from '@/assets/img/send.svg';
import DropDown from '@/components/block/DropDown/DropDown';

export default function Quiz({data}) {
    const [step, setStep] = useState(0);
    const [chatStep, setChatStep] = useState(1);
    const [results, setResults] = useState([])
    const [chatTitle, setChatTitle] = useState('Tus resultados se están cargando.')
    const [messages, setMessages] = useState([
        {
            identifier: 1,
            show: true,
            content: "Para continuar..."
        },
        {
            identifier: 1,
            show: true,
            delay: 1000,
            content: "Indícanos tu número de documento"
        },
        {
            identifier: 2,
            show: false,
            content: "¡Perfecto!"
        },
        {
            identifier: 2,
            show: false,
            delay: 1000,
            content: "Déjanos tu correo para recibir más tips de bienestar."
        },
        {
            identifier: 3,
            show: false,
            content: "¡Listo!"
        },
        {
            identifier: 3,
            show: false,
            delay: 1000,
            content: "¿Quieres unirte a nuestras comunidades de bienestar en whatsapp?"
        }
    ])

    const redirect = (path) => {
        window.location.href = path
    }

    const handleStart = () => {
        setStep(1);
    }
    const handleLoadQuiz = () => {
        setStep(2);
    }
    
    const handleQuizLoader = ()=> {
        setStep(3);
    }

    const handleFinishedQuiz = (data) => {
        setResults(data)
        setStep(4);
    }

    const handleChatStep = (step) => {
        const newMassages = [...messages].map(item => {
            return {
                ...item,
                show: item.identifier === step
            }
        })

        setMessages(newMassages)
        setChatStep(step)
    }

    const handleResult = ()=> {
        const positive = results.filter(result => result.category === 'positivo')
        const negative = results.filter(result => result.category === 'negativo')

        if(negative.length === positive.length) {
            redirect('/Result-Neutro.png')
        }else if(negative.length > positive.length) {
            redirect('/Result-Negativo.png')
        }else {
            redirect('/Result-Positivo.png')
        }
        console.log({
            positive: positive.length, 
            negative: negative.length
        })
    }

    return (
        <div className="quiz">
            {step === 0 && <QuizStart handle={handleStart}/>}

            {step === 1 && 
            <ChatForm title="Estamos cargando tu experiencia" messages={[
                {
                    identifier: 2,
                    show: true,
                    content: "¡Nos alegra verte por aquí!"
                },
                {
                    identifier: 3,
                    show: true,
                    content: "Para iniciar, indícanos tu nombre"
                }
            ]}>
                <Input type="text" placeholder="Escribe tu nombre aquí"/>
                <button className='button--icon button button--primary' disabled={false} onClick={handleLoadQuiz}>
                    <Image className='icon' src={sendIcon} alt="Send icon" />
                </button>
            </ChatForm>}

            {step === 2 && 
            <QuizLoader handle={handleQuizLoader}/>}

            {step === 3 && 
                <QuizGame data={data} handle={handleFinishedQuiz}/>}

            {step === 4 && 
                <ChatForm title={chatTitle} messages={messages}>
                    {chatStep === 1 && 
                    <>
                        <DropDown 
                            options={[
                                {name: 'DNI', value: 'dni'},
                                {name: 'RUC', value: 'ruc'},
                            ]}
                            name="documentType"
                            updateValue={()=>{}}
                            defaultValue="dni"
                        />
                        <Input type="text" inputMode='numeric' placeholder="N° de documento"/>
                        <button 
                            className='button--icon button button--primary' 
                            disabled={false} 
                            onClick={()=> {
                                handleChatStep(2)
                                setChatTitle('Falta poco, estamos preparando tu resultado.')
                            }}>
                            <Image className='icon' src={sendIcon} alt="Send icon" />
                        </button>
                    </>}
                    {chatStep === 2 && 
                    <>
                        <Input type="text" placeholder="Escribe tu correo electrónico"/>
                        <button 
                            className='button--icon button button--primary' 
                            disabled={false} 
                            onClick={()=> {
                                handleChatStep(3)
                                setChatTitle('¡Lo lograste! Estamos listos para publicar tus resultados')
                            }}>
                            <Image className='icon' src={sendIcon} alt="Send icon" />
                        </button>
                    </>}
                    {chatStep === 3 && 
                    <>
                        <button 
                            className='button button--full' 
                            disabled={false} 
                            onClick={()=> handleChatStep(3)}>
                            Lo pensaré
                        </button>
                        <button 
                            className='button button--full button--primary' 
                            disabled={false} 
                            onClick={()=> handleResult()}>
                            ¡Quiero unirme!
                        </button>
                    </>}
                </ChatForm>}
        </div>
    )
}