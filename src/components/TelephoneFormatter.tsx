import { useState, type ChangeEvent } from 'react'

const TelephoneFormatter = () => {
    const [phoneVal, setPhoneVal] = useState("");
    const getStringsWithNumbersOnly = (str: string) => [...str].filter((v) => Number.isInteger(+v) && v !== " ").join("");
    const str = "a24bugh788";
    console.log([...str].filter((v) => Number.isInteger(+v)))
    const formatString = (e: ChangeEvent<HTMLInputElement>) => {
        const numStr = getStringsWithNumbersOnly(e.target.value);
        setPhoneVal(numStr.length > 2 ? "+(" + numStr.substring(0, 2) + ")-" + numStr.substring(2) : numStr)
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", maxHeight: "100vh", gap: "20px" }}>
            <h2>Telephone Formatter</h2>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
                <input type="tel" id='phone' maxLength={16} placeholder='Mobile Number' autoComplete='off' style={{ width: "300px", height: "30px", border: "1px solid black", padding: "5px", fontSize: "1.5rem", marginBottom: "1rem" }} value={phoneVal} onChange={formatString} />
                <div>
                    <label htmlFor="phone">+(91)-7890655434</label>
                </div>
            </div>
        </div>
    )
}

export default TelephoneFormatter