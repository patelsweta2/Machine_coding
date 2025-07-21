import { useMemo, useState } from 'react';


const Star = ({ marked, starId }) => {
    return (
        <span data-star-id={starId} className='star' role='button'>
            {marked ? '\u2605' : '\u2606'}
        </span>
    )
}

const StarRating = () => {
    const value = 2;
    const total = 5;
    const [rating, setRating] = useState(value || 0);
    const [selection, setSelection] = useState(0);
    const starArray = useMemo(() => {
        return Array.from({ length: total });
    }, [total]);

    const onHover = (event: any) => {
        console.log("event", event.target.dataset)
        setSelection(event.target.dataset?.starId ?? 0);
    }

    const onLeave = () => {
        setSelection(0)
    }

    const onClick = (event: any) => {
        setRating(event.target.dataset?.starId ?? rating)
    }

    return (
        <div onMouseLeave={onLeave} onMouseOver={onHover} onClick={onClick}>
            {starArray.map((_, index) => (
                <Star marked={(selection || rating) > index} starId={index + 1} key={`star_${index + 1}`} />
            ))}
        </div>
    )
}

export default StarRating