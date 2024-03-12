import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';




function reducer ( state , action ) {

  switch (action.type) {
    case 'increment':
      return state + action.payload ;
    case 'decrement':
      return state - action.payload ;
    default :
      return state ;
  }
  
}


function App() {

  const [state , dispatch]  = useReducer(reducer , 0);

  return (
    <div className="App">
      <p>{state}</p>
      <button onClick={() => {dispatch({type:'decrement' , payload:1})}}>click</button>
    </div>
  );
}

export default App;
