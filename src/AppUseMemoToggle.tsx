import { useMemo, useState } from 'react'

const AppUseMemoToggle = () => {
    // State to hold a number input by the user
    const [number, setNumber] = useState(0);
    
    // State to toggle between light and dark mode
    const [dark, setDark] = useState(false);

    // Define the style of the component based on the dark mode state
    const divStyle = {
        backgroundcolor: dark ? "black" : "white", // Typo: should be `backgroundColor`
        color: dark ? "white" : "black"
    }

    // Without useMemo:
    // Every re-render (even when only dark mode toggles) causes this expensive calculation to re-run
    // const calculatedNum = expensiveCalculation(number);

    // With useMemo:
    // Caches the result of expensiveCalculation(number)
    // Only re-computes when the 'number' state changes
    const calculatedNum = useMemo(() => {
        return expensiveCalculation(number);
    }, [number]);

    return (
        <div style={divStyle}>
            {/* Input for entering number value */}
            <input 
                type="number" 
                value={number} 
                onChange={(e) => setNumber(Number(e.target.value))}
            />

            {/* Display result of expensive calculation */}
            <h2>Calculated Value: {calculatedNum}</h2>

            {/* Toggle light/dark mode without triggering expensive calculation */}
            <button onClick={() => setDark(!dark)}>Toggle</button>
        </div>
    )
}

export default AppUseMemoToggle;

// Simulated expensive calculation that takes time to complete
function expensiveCalculation(num: number) {
    console.log('>>>> LOOP EXECUTED')
    for (let index = 0; index < 1_000_000_000; index++) { /* Simulate heavy work */ }
    return num;
}

// ✅ useMemo helps avoid unnecessary recomputations of heavy functions unless dependencies change.

// 🛠️ There's a small bug: backgroundcolor should be backgroundColor (case-sensitive in React inline styles).

// 🔁 Toggling dark mode does not re-run expensiveCalculation—this is the benefit of useMemo.