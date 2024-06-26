"use client"
import { useState } from 'react';
import './Quiz.scss';
import QuizStart from '@/components/front/module/QuizStart/QuizStart';
import QuizLoader from '@/components/front/module/QuizLoader/QuizLoader';
import QuizGame from '@/components/front/module/QuizGame/QuizGame';
import ChatForm from '@/components/front/module/ChatForm/ChatForm';
import Input from '@/components/front/block/Input/Input';
import Image from 'next/image';
import sendIcon from '@/assets/img/send.svg';
import DropDown from '@/components/front/block/DropDown/DropDown';
import MultiSteps from '@/components/front/module/MultiSteps/MultiSteps';
import Fade from '@/components/front/animation/Fade/Fade';

export default function Quiz({data}) {
    const [step, setStep] = useState(1);
    const [chatStep, setChatStep] = useState(1);
    const [results, setResults] = useState([])
    const [messages, setMessages] = useState(data.messages)
    const [chatTitle, setChatTitle] = useState(messages[0].title)
    const [userData, setUserData] = useState({})
    const [showChatInput, setShowChatInput] = useState(false)

    const redirect = (path) => {
        window.location.href = path
    }

    const handleStart = () => {
        setStep(2);
    }
    const handleLoadQuiz = () => {
        setStep(3);
    }
    
    const handleQuizLoader = ()=> {
        setStep(4);
    }

    const handleFinishedQuiz = (data) => {
        setResults(data)
        setStep(2);
        const findMessage = messages.find(item => item.identifier === 2)
        handleChatStep(2, findMessage.title)
    }

    const handleChatStep = (step) => {
        const title = messages.find(item => item.identifier === step)?.title
        const newMassages = [...messages].map(item => {
            return {
                ...item,
                show: item.identifier === step
            }
        })
        if(title) setChatTitle(title)
        setMessages(newMassages)
        setChatStep(step)
    }

    const handleResult = ()=> {
        const positive = results.filter(result => result.category === 'positivo')
        const negative = results.filter(result => result.category === 'negativo')

        if(negative.length === positive.length) {
            redirect('/Result-Neutro.png')
        } else if(negative.length > positive.length) {
            redirect('/Result-Negativo.png')
        } else {
            redirect('/Result-Positivo.png')
        }
        console.log(results)
    }

    const onUpdate = (name, value) => {
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const onLastMessage = () => {
        setShowChatInput(true)
    }

    const onChatStepChange = () => {
        setShowChatInput(false)
    }

    return (
        <div className="quiz">
            <MultiSteps step={step}>

                <QuizStart handle={handleStart}/>

                <ChatForm title={chatTitle} messages={messages} onLastMessage={onLastMessage}>
                    <MultiSteps step={chatStep} onStepChange={onChatStepChange}>
                        <Fade show={showChatInput}>
                            <Input onUpdate={onUpdate} type="text" name="name" placeholder="Escribe tu nombre aquí"/>
                            <button className='button--icon button button--primary' disabled={!userData.name} onClick={handleLoadQuiz}>
                                <Image className='icon' src={sendIcon} alt="Send icon" />
                            </button>
                        </Fade>

                        <Fade show={showChatInput}>
                            <DropDown 
                                options={[
                                    {name: 'DNI', value: 'dni'},
                                    {name: 'RUC', value: 'ruc'},
                                ]}
                                name="document_type"
                                onUpdate={onUpdate}
                                defaultValue="dni"
                            />
                            <Input 
                                onUpdate={onUpdate}
                                type="text" 
                                name="document_number" 
                                inputMode='numeric' 
                                placeholder="N° de documento"/>
                            <button 
                                className='button--icon button button--primary' 
                                disabled={!userData.document_number} 
                                onClick={()=> {
                                    handleChatStep(3)
                                }}>
                                <Image className='icon' src={sendIcon} alt="Send icon" />
                            </button>
                        </Fade>

                        <Fade show={showChatInput}>
                            <Input 
                                onUpdate={onUpdate}
                                type="text" 
                                name="email" 
                                placeholder="Escribe tu correo electrónico"/>
                            <button 
                                className='button--icon button button--primary' 
                                disabled={!userData.email} 
                                onClick={()=> {
                                    handleChatStep(4)
                                }}>
                                <Image className='icon' src={sendIcon} alt="Send icon" />
                            </button>
                        </Fade>

                        <Fade show={showChatInput}>
                            <button 
                                className='button button--full' 
                                onClick={()=> handleResult()}>
                                Lo pensaré
                            </button>
                            <button 
                                className='button button--full button--primary' 
                                onClick={()=> handleChatStep(5)}>
                                ¡Quiero unirme!
                            </button>
                        </Fade>

                        <Fade show={showChatInput}>
                            <Input 
                                onUpdate={onUpdate}
                                type="text" 
                                name="phone" 
                                placeholder="Ingresa tu número celular"/>
                            <button 
                                className='button--icon button button--primary' 
                                disabled={!userData.phone} 
                                onClick={()=> {
                                    handleResult()
                                }}>
                                <Image className='icon' src={sendIcon} alt="Send icon" />
                            </button>
                        </Fade>
                    </MultiSteps>
                </ChatForm>

                <QuizLoader name={userData.name} handle={handleQuizLoader}/>

                <QuizGame data={data} handle={handleFinishedQuiz}/>

            </MultiSteps>
        </div>
    )
}