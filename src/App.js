import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UsersList from './components/UsersList/UsersList';
import "./style.css";


function App() {
  const [usersData, setUsersData] = useState([]);

  const handleUsersData = (object) => {
    setUsersData(prevState => {
      return [...prevState, object]
    });
  }
  
  return (
    <>
      <UserForm handleUsersData={handleUsersData} />
      <UsersList users={usersData || []}/>
    </>
  );
}

export default App;
