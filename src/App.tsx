import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { ListingNames } from './ListingNames';
import { Book, User } from './types/mainTypes';

function App() {
  const [appName, setAppName] = useState<string>('Old App');
  const [count, setCount] = useState<number>(1); // number state
  const [usersData, setUsersData] = useState<User>([]); // array state
  const [switchFlag, setSwitchFlag] = useState<boolean>(false); // boolean state
  const [bookObj, setBookObj] = useState<Book>({name: 'The Amazing Spider-Man'}); // object state 
  
  // document.title = appName // changing app title 

  const clickHandler = () => {
    setCount(count + 1)
  }
  
  const changeFlag = () => {
    setSwitchFlag(prevState => !prevState)
  }

  const changeBookName = () => {
    setBookObj({name: 'Spider-Man: Into the spiderverse'})
  }

  const changeAppName = () => [
    setAppName("New App")
  ]

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

  // Runs when switchFlag change (only upon true value)
  useEffect(()=>{
     if (switchFlag) {
    (async function(){
      const data = await fetchUsers();
      setUsersData(data)
    })();
  }
  }, [switchFlag]) 

  // Prevents unneccessory re-renders
  const multResult = useMemo(()=>{
    console.log("🧠 useMemo Recomputed"); // for testing
    return usersData.length * count;
  },[usersData.length, count]);

  const multResultNormal = (function(){
    console.log("👀 Normal Recomputed"); // for comparing with useMemo
    return 2+2;
  })();

  console.log('>>> USER DATA ', usersData)   
  console.log('>>> SWITCH ', switchFlag)
  console.log('>>> BOOK ', bookObj)
  console.log('>>> CALCULATION ', multResult)    


  return (
    <>
    <title>{appName}</title>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={clickHandler}>
          count is {count}
        </button>
      </div>

      <p>Calculation : {multResult} </p>
      <p>Normal Calculation : {multResultNormal} </p>

      <br />
      <div>
        {usersData.length == 0 && "Empty Data"}
       {usersData.length > 0 && "Fetched Data"} 
      </div>

      <br />
      <div>
        <button onClick={changeFlag}>
          {switchFlag ? "On": "Off"}
        </button>
      </div>

      <br />
      <div>
        <span>{bookObj.name}</span>
      </div>

      <br />
      <div className="card">
        <button onClick={changeBookName}>
         Change Book Name
        </button>
      </div>

      <br />
      <div className="card">
        <button onClick={changeAppName}>
         Change APP Name
        </button>
      </div>

      <br />
      <div>
        <ul>
        {usersData.map((item)=><ListingNames key={item.id} name={item.name} />)}
        </ul>
      </div>
    </>
  )
}

export default App
