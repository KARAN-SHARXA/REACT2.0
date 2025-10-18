import React from 'react'

function App() {
  function btnCliked(){
    console.log('button is clicked');
    
  }
  function explaore(){
    console.log('ram');
    
  }
  return (
    <div>App
      <button onClick={btnCliked}>clilk me</button>
      <button onClick={explaore} >Explore this</button>
      <input type="text" onChange={(elem)=>{
        console.log(elem.target.value);
        
      }} placeholder='enetr your name' />
    </div>
    
  )
}

export default App