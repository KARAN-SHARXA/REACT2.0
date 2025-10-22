import React from 'react'

export const App = () => {
  localStorage.setItem('user','karan')
  const user = localStorage.getItem('user')
  console.log(user);

  const user1 = {
    username:"Sarthak",
    age:18,
    city:"Bhopal"
  }

  localStorage.setItem('user1',JSON.stringify(user1))

  const user2=JSON.parse(localStorage.getItem('user1'))
  console.log(user2);
  
  
  return (
    <div>App</div>
  )
}

export default App