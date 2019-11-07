import React from 'react';
import ListTours from './Components/ListTours'
import './App.css';
import NavBar from './Components/NavBar'

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <ListTours />
    </div>
  );
}

export default App;
