import React, { createContext, useReducer } from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import './App.css';
import Error from './components/Error';
import Logout from './components/Logout';
import {initialState,reducer} from '../src/reducer/usereducer';
export const UserContext=createContext()
;const App=()=> {
  const[state,dispatch]=useReducer(reducer,initialState);
  return (
    
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Navbar/>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route  path="/about">
        <About/>
      </Route>
      <Route  path="/contact">
        <Contact/>
      </Route>
      <Route  path="/login">
        <Login/>
      </Route>
      <Route  path="/register">
        <Register
        />
      </Route>
      <Route  path="/logout">
        <Logout
        />
      </Route>
      <Route >
      <Error/>
      </Route>
      </Switch>
     
    </UserContext.Provider>
      
    </>
  );
}

export default App;
