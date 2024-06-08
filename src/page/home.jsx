import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/users');
      result.json().then(json=>{setUser(json)}

      )}
    fetchData();
  }, []);

  return (
    <div>
      <h1>HomePage</h1>
      <p>Welcome to Webapp</p>
      {}  
    </div>
  );
}

export default Home;
