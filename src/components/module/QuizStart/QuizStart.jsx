import './QuizStart.scss'
import Image from 'next/image'
import figureSvg from '@/assets/img/image.svg'
import logoSvg from '@/assets/img/Logo.svg'
import InputCheck from '@/components/block/InputCheck/InputCheck'

export default function QuizStart({
    handle
}) {
    const handleNext = () => {
        handle()
    }
    return (
        <div className="quiz_start">
            <div className="quiz_start__wrapper">
                <Image src={figureSvg} className='quiz_start__image' alt='Figurin image'/>
                <h1 className='quiz_start__title'>Descubre que que figurin eres</h1>
                <button onClick={handleNext} className='button button--full'>Comenzar ahora</button>
                <InputCheck type='checkbox'>
                    Acepto el uso de datos personales y gestión comercial.
                </InputCheck>
                <Image src={logoSvg} className='quiz_start__logo' alt='Rimac logo'/>
            </div>
        </div>
    )
}