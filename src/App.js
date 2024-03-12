import logo from './logo.svg';
import './App.css';
import { useReducer, useRef, useState } from 'react';





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


function TextInput () {

  const [value , setValue] = useState('foo bar');

  const arr = [] ;

  function ifThisCharIsUniq (value) {
    if(!arr.includes(value)) {
      arr.push(value) ;
      return value ;
    }
    else {
      return false ;
    }
  }

  return (
    <div>
      <input type='text' value={value.split('').filter((elem) => elem !== ' ' && ifThisCharIsUniq(elem)).join('').length} readOnly/>
      <input onChange={(e) => {setValue(e.target.value)}} /* readOnly */ value={value} type='text'/>
    </div>
  )

  return 
}

function App() {

  const [state , dispatch]  = useReducer(reducer , 0);

  return (
    <div className="App">
      <p>{state}</p>
      <button onClick={() => {dispatch({type:'decrement' , payload:1})}}>click</button>
      <TextInput />
    </div>
  );
}

export default App;
