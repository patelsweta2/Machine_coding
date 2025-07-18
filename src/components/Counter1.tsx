import { useRef, useState } from 'react'

const Counter1 = () => {
    const [value, setValue] = useState(0);
    const step = useRef(1);

    const setStep = (value: number) => {
        step.current = value;
    }
    const increment = () => {
        setValue((state) => state + step.current)
    }
    const decrement = () => {
        setValue((state) => state - step.current)
    }
    const reset = () => {
        setValue(0)
    }
    return (
        <main style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }} className='main'>
            <h2 style={{ fontSize: "20px" }}>{value}</h2>
            <section>
                <button onClick={decrement} aria-label='Decrement' style={{ width: "100px", margin: "20px", height: "30px", border: "1px solid black", cursor: "pointer" }}>-</button>
                <button onClick={increment} aria-label='Increment' style={{ width: "100px", margin: "20px", height: "30px", border: "1px solid black", cursor: "pointer" }}>+</button>
            </section>
            <section>
                <label htmlFor="step">Increment/Decrement by</label>
                <input type="number" id='step' defaultValue={step.current} onChange={(e) => setStep((e.target as HTMLInputElement).valueAsNumber)} title='Step value' />
            </section>
            <section>
                <button onClick={reset}>Reset</button>
            </section>
        </main>
    )
}

export default Counter1