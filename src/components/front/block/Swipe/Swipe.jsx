import './Swipe.scss'
import Image from 'next/image'
import { useState, useRef } from 'react'
import CardImage from '../CardImage/CardImage';

export default function Swipe({
    data,
    onSwipeLeft,
    step,
    onSwipeRight
}) {
    const option = data.options[0];
    const { image, value } = option;
    const left = value.find(value => value.choice === 'left');
    const right = value.find(value => value.choice === 'right');
    
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const swipeRef = useRef(null);

    const handleTouchStart = (e) => {
        setStartX(e.clientX || e.touches[0].clientX);
    }

    const handleTouchMove = (e) => {
        if(!startX) return;
        console.log('here')
        setEndX(e.clientX || e.touches[0].clientX);
        setIsSwiping(true);
    }

    const triggerSwipeLeft = () => {
        onSwipeLeft({
            ...left.value,
            category: left.category
        }, step);
    }

    const triggerSwipeRight = () => {
        onSwipeRight({
            ...right.value,
            category: right.category
        }, step);
    }

    const handleTouchEnd = () => {
        if(!isSwiping) return;
        const diff = startX - endX;
        if(diff > 0) {
            triggerSwipeLeft();
        } else {
            triggerSwipeRight();
        }
        setStartX(0);
        setEndX(0);
        setIsSwiping(false);
    }

    const handleMouseLeave = () => {
        setStartX(0);
        setEndX(0);
        setIsSwiping(false);
    }

    return (
        <div 
            className="swipe"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
            onMouseLeave={handleMouseLeave}
        >
            <div className="swipe__header">
                <div className="swipe__header__title">{data.title}</div>
            </div>
            

            <div className="swipe__content">
                <div className="swipe__content__left">
                    <button className='swipe__content__button' onClick={triggerSwipeLeft}>
                        ❌
                    </button>
                </div>

                <div className="swipe__content__middle">
                    {image && <CardImage className="swipe__content__image" width={168} height={228} src={image} alt={data.title} />}
                </div>

                <div className="swipe__content__right">
                    <button className='swipe__content__button'  onClick={triggerSwipeRight}>
                        ✅
                    </button>
                </div>
            </div>

            <div className="swipe__footer">
                <div className="swipe__footer__content">
                    {data.subtitle}
                </div>
            </div>
        </div>
    )
}