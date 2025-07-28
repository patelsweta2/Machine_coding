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
    const [rating, setRating] = useState(value ?? 0);
    const [selection, setSelection] = useState(0);
    const starArray = useMemo(() => {
        return Array.from({ length: total })
    }, [total])
    const handleHover = (e: any) => {
        setSelection(e.target.dataset?.starId ?? 0)
    }
    const onLeave = () => {
        setSelection(0);
    }
    const onClick = (e: any) => {
        setRating(e.target.dataset?.starId ?? rating)
    }
    return (
        <div onMouseLeave={onLeave} onMouseOver={handleHover} onClick={onClick}>
            {starArray.map((_, index) => (
                <Star marked={(selection || rating) > index} starId={index + 1} key={`star_${index + 1}`} />
            ))}
        </div>
    )
}

export default StarRating;