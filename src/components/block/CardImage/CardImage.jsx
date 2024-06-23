import './CardImage.scss'
import Image from 'next/image'

export default function CardImage({title, ...props}) {
    return (
        <div className="card_image">
            <Image {...props}/>
            {title && <p>
                {title}
                </p>}
        </div>
    )
}