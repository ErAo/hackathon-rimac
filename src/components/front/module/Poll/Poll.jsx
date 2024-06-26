import './Poll.scss'
import CardImage from '@/components/front/block/CardImage/CardImage'

export default function Poll({ data, step, onSelected }) {
    const handleSelection = (value)=> {
        onSelected(value, step)
    }
    return (
        <div className="poll">
            <div className="poll__header">
                <div className="poll__header__title">{data.title}</div>
            </div>
            
            <div className="poll__content">
                {data.options.map((option) => (
                    <button key={option.id} onClick={()=>handleSelection({
                        ...option.value,
                        category: option.category
                    })}>
                        <CardImage 
                            src={`/poll${option.image}`} 
                            width={144} 
                            height={74}
                            title={option.title} 
                            alt={option.title} />
                    </button>
                ))}
            </div>

            <div className="poll__footer">
                <div className="poll__footer__content">
                    {data.subtitle}
                </div>
            </div>
        </div>
    )
}