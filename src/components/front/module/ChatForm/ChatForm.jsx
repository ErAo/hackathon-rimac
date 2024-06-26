import './ChatForm.scss'
import Image from 'next/image'
import Bubble from '@/components/front/block/Bubble/Bubble'
import BottomSheet from '@/components/front/block/BottomSheet/BottomSheet'
import chatFormImage from '@/assets/img/chat-form.svg'

export default function ChatForm({
    messages = [],
    children,
    title
}) {
    console.log(messages)

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
                            {messages.map((message, index) => (
                                <Bubble key={index} delay={message.delay} show={message.show}>
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