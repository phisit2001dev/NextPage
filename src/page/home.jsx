import React, { useState, useEffect } from 'react';

function Home() {
  const [user, setUser] = useState([]);
{/*Hook Api get data*/}
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await result.json();
      setUser(data);
      }

    fetchData();
  }, []);
console.log(user)
  return (
    <div>
      <h1>HomePage</h1>
      <p>Welcome to Webapp</p>
      <ul>
          {user.map(user=>(
            <ul key={user.id} >
              <li>{user.name}    Email :{user.email}</li>
            </ul>
          )
          )}
      </ul>  
    </div>
  );
}

export default Home;
