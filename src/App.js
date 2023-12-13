import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

const sp =[
  {name : "cricket", time :"1day" },
  {name : "football", time:"90min" },
  {name : "run", time : "3day" }
]

function App() {
  return (
    <div className="App">
      {/* <h1>My favourit sports</h1> */}
      {/* {sp.map(sport=> <Sports came={sport.name} time={sport.time}></Sports>)} */}
      {/* <Sports></Sports>
      <Sports></Sports>
      <Sports></Sports>
      <Sports></Sports> */}

      {/* api call -------------------------------------------*/}
      <GetUser></GetUser>

    </div>
  );
}
// sport part how to props work-----------------------------------
// function Sports(props){
//   return (
//     <div className='spp'>
//       <h1>Name : {props.came}</h1>
//     <h3>time : {props.time} </h3>
//     </div>
//   )
// }

// api part---------------------------------
function GetUser(){
  const [users, Setusers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( data => Setusers(data))
  },[])

  return (
    <div>
      <h1>All user</h1>
      {users.map(user => <li>{user.name} {user.email}</li>
    )}
    </div>
  )
}
export default App;
//isj
