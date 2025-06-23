import React, { useEffect, useMemo, useState } from 'react'

const AppUseEffectWithMemo = () => {
  const [userData, setUserData] = useState(null);
  const [userId, setUserId] = useState(1);

  const changeUserIdHandle = (id: number) => {
    setUserId(id)
  }

  const userIdMemo = useMemo(()=> userId, [userId])

  useEffect(()=>{
    async function fetchData() {
            try {
                console.log('🤖 USER FETCHED')
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userIdMemo}`)
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
  }, [userIdMemo])

  return (
    <>
    <div>
      <p>{JSON.stringify(userData)}</p>
    </div>
    <div>
      <button onClick={()=>changeUserIdHandle(2)}>User 2</button>
      <button onClick={()=>changeUserIdHandle(3)}>User 3</button>
      <button onClick={()=>changeUserIdHandle(4)}>User 4</button>
    </div>
    </>
  )
}

export default AppUseEffectWithMemo