import { useEffect, useState } from 'react';
const Box = () => {

    let box = [{ id: 1, BoxName: 1, colors: 'white', clicked: false, position: 1 }, { id: 2, BoxName: 2, colors: 'white', clicked: false, position: 2 }, { id: 3, BoxName: 3, colors: 'white', clicked: false, position: 3 }]
    const [boxes, setBoxes] = useState(box)
    let clicked = 0;
    const [pos, setPos] = useState(1)
    const handleClick = (id: number) => {
        setBoxes(boxes.map(box => {
            if (box.id === id && box.colors !== 'red') {
                return { ...box, colors: 'yellow', clicked: true, position: pos }
            }
            return box;
        }))
        setPos((prev) => prev + 1)
    }
    const [isAllClicked, setIsAllClicked] = useState(false);
    console.log("boxes", boxes)
    console.log("clicked", clicked)
    useEffect(() => {
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].clicked === false) {
                clicked = 0;
                return;
            } else {
                clicked = 1;
            }
        }
        if (clicked === 1) {
            setIsAllClicked(true)
        }
    }, [boxes])

    const handleAllClick = () => {
        setTimeout(() => {
            let newBoxes = [...boxes].sort((a, b) => a.position - b.position);
            newBoxes = newBoxes.map(box => ({ ...box, colors: 'yellow', clicked: true }));
            setBoxes(newBoxes);
            for (let i = 0; i < newBoxes.length; i++) {
                setTimeout(() => {
                    newBoxes[i].colors = 'red';
                    newBoxes[i].clicked = false;
                    setBoxes([...newBoxes]);
                }, (newBoxes.length - 1 - i) * 1000)
            }
        }, 0)
        setIsAllClicked(false)
    }
    useEffect(() => {
        if (isAllClicked) {
            setTimeout(() => {
                handleAllClick()
            }, 1000)
        }
    }, [isAllClicked])
    return (
        <div className='box-container'>
            {boxes.map((i) => (
                <div key={i.BoxName} style={{ backgroundColor: i.colors, height: "100px", width: "100px", border: "1px solid black", cursor: "pointer" }} onClick={() => handleClick(i.id)} />
            ))}
        </div>
    )
}

export default Box;