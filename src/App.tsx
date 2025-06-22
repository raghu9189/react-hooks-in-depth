import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [usersData, setUsersData] = useState([])

  const clickHandler = () => {
    setCount(count + 1)
  }

  const fetchUsers = async () => {
    console.log("🚨 API CALLED");
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersData = await resp.json()
    return usersData;
  }

  // Runs once on mount 
  useEffect(()=>{
    (async function(){
      const data = await fetchUsers();
      setUsersData(data)
    })();
  }, []) 

  console.log('>>> USER DATA ',usersData)    
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={clickHandler}>
          count is {count}
        </button>
      </div>
      <div>
        {usersData.length == 0 && "Empty Data"}
       {usersData.length > 0 && "Fetched Data"} 
      </div>
    </>
  )
}

export default App
