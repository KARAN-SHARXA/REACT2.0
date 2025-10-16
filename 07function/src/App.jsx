import React from 'react'

const App = () => {
  const btnclic=()=>{
    alert("ram ram mitter")
  }

  const onMouseEnter=()=>{
    alert("you enter the mohue")
  }

  const dubleClic=()=>{
    console.log('button is clickded');
    
  }
  return (
    <div>
      <h1>hello i am karan</h1>
      <button onMouseEnter={onMouseEnter} onDoubleClick={btnclic} >change user</button>
      <button onClick={onMouseEnter}>Explore the notation</button>
      <button onDoubleClick={dubleClic}>clilk me lokesh</button>
    </div>
  )
}

export default App