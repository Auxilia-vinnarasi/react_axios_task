//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from "react";


function App() {

  const[joke,setJoke]=useState("");
 const getjoke=()=>{ 
  axios.get(`https://official-joke-api.appspot.com/random_joke`)
  .then((response)=>{
   // console.log(response);
   setJoke(response.data.setup+"...."+response.data.punchline)
  }
  )
}
  return (
    <div className="main">
      <h2>Hello There,</h2>
      <button class="button"onClick={getjoke}>Get joke right there</button>
    <h3 style={{marginTop:20}}> {joke}</h3>
    </div>
  );
}

export default App;
