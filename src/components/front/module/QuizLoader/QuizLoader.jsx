import './QuizLoader.scss'
import Image from 'next/image'
import figureSvg from '@/assets/img/chat-form.svg'
import logoSvg from '@/assets/img/Logo.svg'
import { useEffect } from 'react';

export default function QuizLoader({
    handle,
    name
}) {
    useEffect(() => {
        setTimeout(() => {
           handle()
        }, 1500)
    }, [])

    return (
        <div className="quiz_loader">
            <div className="quiz_loader__wrapper">
                <Image src={figureSvg} className='quiz_loader__image' alt='Figurin image'/>
                <span className="spin">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="26" viewBox="0 0 13 26" fill="none">
                    <path d="M13 24C6.92487 24 2 19.0751 2 13C2 6.92487 6.92487 2 13 2" stroke="white" strokeWidth="3"/>
                </svg>
                </span>
                <h1 className='quiz_loader__title'>Hola, {name}, estamos cargando tu experiencia</h1>
                <p className='quiz_loader__text'>
                Esto puede demorar algnos segundos
                </p>
                <Image src={logoSvg} className='quiz_loader__logo' alt='Rimac logo'/>
            </div>
        </div>
    )
}