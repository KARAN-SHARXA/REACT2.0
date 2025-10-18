import React, { useState } from 'react'

const App = () => {
  const [num, setA] = useState(20)
  const [username, setusername] = useState('Karan')
  const [user,setuser]=useState({user:'karan',age:20})
  const [a,seta]=useState(['karan','mukesh,30'])

  let aa =()=>{
    const newaa = [...a];
    newaa[0] ='rahul';
    seta(newaa)

  }

  let array=()=>{
    const newNum ={...num};
    newNum.user='Aman'
    setuser(newNum)

  }
  
  let changeNum = ()=>{
    setA(num+1);
    setusername('mukesh')

  }
  let subtract =()=>{
    setA(num-1);
  }


  return (
    <div>App
      <h1>vale of num is{num} <br />vale of the user {username} </h1>
      <button onClick={changeNum} >clickm me</button>
      <button onClick={subtract} >for subtrack</button>
      <h1>{user.user},{user.age}</h1>
      <button onClick={array} >lick kr mc</button>
      <h1>the value of a is {a[0]} and age is {2}</h1>
      <button onClick={aa} > dbba na </button>
    </div>
  )
}

export default App