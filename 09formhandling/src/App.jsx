import React, { useState } from "react";

function App() {

  const [title,setTitle] = useState('')



  const submitHandler =(e)=>{
    e.preventDefault()
    console.log('Form Handling',title);
    setTitle('')
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <input type="text" 
        placeholder="Enter you name"
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
          
        }}
        
         />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
