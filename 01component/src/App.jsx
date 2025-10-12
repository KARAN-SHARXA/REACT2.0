import React from 'react'
import Card from './assets/componenet/c1'

const App = () => {

  const user =" mukesh";
  const age = 89;
  return (
    <div>
      <div className='card'>
        <h1>karan sharam {user} and my age is {age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, corporis.</p>
      </div>

      <Card></Card>

      <Card></Card>


    </div>
  )
}

export default App