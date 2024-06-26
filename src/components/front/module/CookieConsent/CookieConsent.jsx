'use client'
import { useState } from 'react'
import './CookieConsent.scss'

export default function CookieConsent() {
    const [ show, setShow ] = useState(true)
    const setStorage = (key, value) => {
        window?.localStorage.setItem(key, value)
    }

    const handleAccept = () => {
        setStorage('cookie-consent', 'accepted')
        setShow(false)
    }

    const cookiesAccepted = () => {
        try {
            return window?.localStorage?.getItem('cookie-consent') === 'accepted'
        }catch(e){
            return true
        }
    }


    return (
        show && cookiesAccepted() === false &&
        <div className="cookie_consent">
            <div className="cookie_consent__content">
                <h4>Uso de Cookies</h4>
                <p>En RIMAC utilizamos cookies para mantener nuestro sitio seguro y darte una mejor experiencia personalizada. Obtén más información en nuestra <a >política de cookies</a>. Habilita todas las cookies haciendo clic en Aceptar o configura su uso desde la opción Configurar.</p>

                <div className="cookie_consent__actions">
                    <button className='button button--full button--bordered'>Configurar</button>
                    <button className='button button--full button--primary' onClick={handleAccept}>Aceptar</button>
                </div>
            </div>
        </div>
    )
}