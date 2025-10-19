import React from 'react'

function App() {

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log('Form Submitted');
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <input type="text" name="" id="" placeholder='enter you name' />
        <button>Submit</button>
        
      </form>
    </div>
  )
}

export default App