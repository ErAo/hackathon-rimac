import './QuizLoader.scss'
import Image from 'next/image'
import figureSvg from '@/assets/img/image.svg'
import logoSvg from '@/assets/img/Logo.svg'
import { useEffect } from 'react';

export default function QuizLoader({
    handle
}) {
    useEffect(() => {
        setTimeout(() => {
           handle()
        }, 5000)
    }, [])

    return (
        <div className="quiz_loader">
            <div className="quiz_loader__wrapper">
                <Image src={figureSvg} className='quiz_loader__image' alt='Figurin image'/>
                <span className="spin">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="26" viewBox="0 0 13 26" fill="none">
                    <path d="M13 24C6.92487 24 2 19.0751 2 13C2 6.92487 6.92487 2 13 2" stroke="white" stroke-width="3"/>
                </svg>
                </span>
                <h1 className='quiz_loader__title'>Descubre que que figurin eres</h1>
                <p className='quiz_loader__text'>
                Esto puede demorar algnos segundos
                </p>
                <Image src={logoSvg} className='quiz_loader__logo' alt='Rimac logo'/>
            </div>
        </div>
    )
}