import { Link } from "react-router-dom"
import React, { useState } from "react"

import "./App.css";


const Title = () => {
  return (
    <h1>
      Counter
    </h1>
  )
}

function App() {
  const [counter, setCounter] = useState(0);
  
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter -1);
  };
  return (
    <div 
      className="bg-primary h-100 p-5"
      style={{ color: 'white' }}
    >
      <div style={{
        fontSize: "120%",
        position: "relative",
        top: "15vh",
      }}
      >
        {counter}
      </div>
      <div className="buttons">
        <button style={{
          fontSize: "100%",
          position: "relative",
          top: "20vh",
          marginRight: "5px",
          backgroundColor: "green",
          borderRadius: "8%",
          color: "white",
        }}
        onClick={(handleClick1)}
        >
          Plus 1</button>
          <button style={{
            fontSize: "100%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "red",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={(handleClick2)}
          >
            Minus 1
          </button>
      </div>
      <Link className="text-light" to='/about'>{'About ->'}</Link>
      <div></div>
      <Link className="text-light" to='/Contact'>{'Contact ->'}</Link>
      <Title />
    </div>
  )
}


export default App
