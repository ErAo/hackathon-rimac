import { useEffect, useState } from 'react'
import './ChatForm.scss'
import Image from 'next/image'
import Bubble from '@/components/front/block/Bubble/Bubble'
import BottomSheet from '@/components/front/block/BottomSheet/BottomSheet'
import chatFormImage from '@/assets/img/chat-form.svg'

export default function ChatForm({
    messages = [],
    children,
    title,
    onLastMessage = () => { }
}) {
    const [showMessages, setShowMessages] = useState([])
    const [messageIndex, setMessageIndex] = useState(0)

    const showMessagesHandler = (newIndex) => {
        const newMessages = [...messages].filter((message, index) => {
            return message.show && index <= newIndex
        })

        setShowMessages(newMessages)
        
        if(newMessages.length === showMessages.length){
            onLastMessage()
        }
    }

    useEffect(() => {
        const defaultIndex = messages.findIndex(message => message.show)
        showMessagesHandler(defaultIndex)
        setMessageIndex(defaultIndex)
    }, [messages])

    const onShow = () => {
        setMessageIndex(messageIndex + 1)
        showMessagesHandler(messageIndex + 1)
    }

    return (
        <div className="chat_form">
            <div className="chat_form__wrapper">
                <div className="chat_form__header">
                    <div className="chat_form__header__content">
                        <Image src={chatFormImage} alt="Geometric figures" className="chat_form__header__image" />
                        <div className="chat_form__header__title">{title}</div>
                    </div>
                </div>
                <div className="chat_form__chat">
                    <BottomSheet>
                        <div className="chat_form__chat__messages">
                            {showMessages.map((message, index) => (
                                <Bubble key={`${index}-${message.identifier}`} delay={message.delay} onShow={onShow} show={message.show}>
                                    {message.content}
                                </Bubble>
                            ))}
                        </div>
                        <div className="chat_form__chat__form">
                            {children}
                        </div>
                    </BottomSheet>
                </div>
            </div>
        </div>
    )
}