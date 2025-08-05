import { useState } from 'react';
import "./calculator.css"
const calData = ["Clear", "Del", "+-", "X^2", 1, 2, 3, "+", 4, 5, 6, "/", 7, 8, 9, "-", 0, "X^Y", "root", "*", ".", "="];

const Calculator = () => {
    const [value, setValue] = useState("");

    const handleClick = (item: any) => {
        if (item === 'clear') {
            setValue('');
        }
        else if (item === 'Del') {
            setValue(value.slice(0, -1))
        } else if (item === "=") {
            try {
                const formattedValue = value.replace(/X\^2/g, `**2`)
                    .replace(/X\^Y/g, `**`)
                    .replace(/root/g, `Math.sqrt`)
                const result = eval(formattedValue);
                setValue(result.toString());
            } catch (error) {
                setValue("Error")
            }
        } else if (item === '+-') {
            setValue((prev) => (prev.charAt(0) === '-' ? prev.slice(1) : '-' + prev))
        } else if (item === 'X^2') {
            setValue((prev) => `(${prev})**2`);
        } else if (item === 'X^Y') {
            setValue((prev) => `${prev}**`);
        } else if (item === 'root') {
            setValue((prev) => `Math.sqrt(${prev})`)
        } else {
            setValue(value + item)
        }
    }

    return (
        <div className='container'>
            <div className='calculator-box'>
                <div>
                    <input type="text" value={value}/>
                </div>
                <div className='calculator-grid'>
                    {calData.map((item) => <button key={item} className='calc-btn' onClick={() => handleClick(item)}>{item}</button>)}
                </div>
            </div>
        </div>
    )
}

export default Calculator;