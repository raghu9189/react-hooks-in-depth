import React, { useMemo, useState } from 'react';
import { searchUsersDataset } from './constants/searchDataset';
import './App.css'

const AppUseMemoSearching = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0); // just to trigger re-renders

  console.log('RE-RENDER HAPPENED');
  // 👇 Expensive operation: filtering a large list
  const filteredUsers = useMemo(() => {
    console.log('🔍 Filtering users...');
    return searchUsersDataset.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
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

export default AppUseMemoSearching;
