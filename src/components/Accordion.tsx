import { useState } from 'react'

const Accordion = () => {
    const Questions = [{ id: 1, quest: "Do I have to allowed the use of cookies?", ans: "Yes, you are allowed to use the cookies, but first you need to click ok for that" },
    { id: 2, quest: "Do I have to allowed the use of Javascript?", ans: "Yes, you are allowed to use the Javascript, but first you need to click ok for that" },
    { id: 3, quest: "Do I have to allowed the use of ReactJs?", ans: "Yes, you are allowed to use the ReactJs, but first you need to click ok for that" },
    { id: 4, quest: "Do I have to allowed the use of NextJs?", ans: "Yes, you are allowed to use the NextJs, but first you need to click ok for that" },
    { id: 5, quest: "Do I have to allowed the use of NodeJs?", ans: "Yes, you are allowed to use the NodeJs, but first you need to click ok for that" }
    ]
    const [isMultipleOpenAllowed, setIsMultipleOpenAllowed] = useState(false);
    const [openItems, setOpenItems] = useState<number[]>([])

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsMultipleOpenAllowed(e.target.checked);
    };
    const handleToggle = (id: number) => {
        if (isMultipleOpenAllowed) {
            setOpenItems((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev,id])
        } else {
            setOpenItems((prev) => (prev.includes(id)) ? [] : [id])
        }
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", maxHeight: "100vh", marginTop: "40px", flexDirection: "column" }}>
            <h2>Accordion</h2>
            <div><label htmlFor="multiOpen">Is multiple open accordion allowed?</label><input id='multipleOpen' type="checkbox" checked={isMultipleOpenAllowed} onChange={handleCheckboxChange} style={{ marginLeft: '10px', cursor: "pointer" }} /></div>

            <div style={{ display: "flex", marginTop: "40px", flexDirection: "column", gap: "20px" }}>
                {Questions.map((item) => <div style={{ padding: "20px", border: "1px solid black", cursor: 'pointer', backgroundColor: openItems.includes(item.id) ? 'blue' : 'white' }} key={item.id} onClick={() => handleToggle(item.id)}><p style={{ fontWeight: "bold" }}>{item.quest}</p>{openItems.includes(item.id) && <p>{item.ans}</p>}</div>)}
            </div>
        </div>
    )
}

export default Accordion;