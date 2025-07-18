import { useState } from 'react';

const GuessNum = () => {
    const [guessNum, setGuessNum] = useState(Math.floor(Math.random() * 101))
    const [num, setNum] = useState(1);
    const [guessTime, setGuessTime] = useState(0)
    const handleChange = (e: any) => {
        const val = Number(e.target.value);
        if (val >= 0 && val <= 100) {
            setNum(val);
        }
    }
    const [message, setMessage] = useState('')
    const handleCheck = () => {
        if (Number(num) > guessNum) {
            setMessage(`Your guess is Higher than the Actual number`)
        } else if (Number(num) < guessNum) {
            setMessage(`Your guess is Less than the Actual number`)
        } else {
            setMessage(`You are correct at ${guessTime} time`)
        }
        setGuessTime((prev) => prev + 1)
    }
    const handleReset = () => {
        setGuessNum(Math.floor(Math.random() * 101));
        setNum(1)
        setGuessTime(0)
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", maxHeight: "100vh", marginTop: "40px", flexDirection: "column" }}>
            <h2>Guess a Number between 0 and 100</h2>
            <input type="text" onChange={handleChange} style={{ width: "300px", height: '20px', border: "1px solid black", textAlign: "center" }} value={num} />
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                <button style={{ width: "80px", height: "30px", backgroundColor: "blueviolet", cursor: "pointer" }} onClick={handleReset}>Reset</button>
                <button style={{ width: "80px", height: "30px", backgroundColor: "blueviolet", cursor: "pointer" }} onClick={handleCheck}>Check</button>
            </div>
            {message && <p style={{ marginTop: "20px" }}>{message}</p>}
        </div>
    )
}

export default GuessNum