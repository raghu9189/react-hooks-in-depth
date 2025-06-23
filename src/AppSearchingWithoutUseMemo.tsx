import React, { useEffect, useState } from 'react';
import { searchUsersDataset } from './constants/searchDataset';
import './App.css'

const AppSearchingWithoutUseMemo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0); // just to trigger re-renders
  const [filteredUsers, setFilteredUsers] = useState(searchUsersDataset);

  console.log('RE-RENDER HAPPENED');
  // 👇 Expensive operation: filtering a large list
  useEffect(() => {
    console.log('🔍 Filtering users...');
    setFilteredUsers(()=>searchUsersDataset.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  }, [searchTerm]); // only re-runs when `searchTerm` changes

  return (
    <div>
      <h2>useMemo Filter Example</h2>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search users..."
        onChange={e => setSearchTerm(e.target.value)}
      />

      <button onClick={() => setCount(c => c + 1)}>
        Re-render ({count})
      </button>

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AppSearchingWithoutUseMemo;
