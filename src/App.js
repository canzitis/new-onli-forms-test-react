
import { Route } from 'react-router';
import './App.css';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import React from 'react';


function App() {
 
  return (
    <div className="App">
      <div className="container">
        <Route path='/login'>
        <Login/>
        </Route>
        <Route path='/profile'>
        <Profile/>
        </Route>
      </div>
    </div>
    );
}

export default App;
