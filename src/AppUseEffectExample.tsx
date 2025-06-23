import { useEffect, useState } from "react"
import './App.css'
const AppUseEffectExample = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    
    // fetching async/await API data
    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(true);
            }
        }
        fetchData()
    }, []);

  return (
    <>
    <div>DATA: {JSON.stringify(data)}</div>
    {error && <div>ERROR: {error}</div>} 
    </>
  )
}

export default AppUseEffectExample