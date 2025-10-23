import React, { useEffect, useState } from 'react'

function App() {

  const [count,setcount]= useState(0);
  const [total,settotal]=useState(1);

  // first -> side effect function
  // Secod -> cleaning-up function
  // third ->comma seprated dep list

  // variation 1
  useEffect(()=>{
    alert("i will run on each render")
  })


  //varition 2
  useEffect(() => {
    alert("i will run this")
    
  }, [])


//varition no 3
  useEffect(()=>{
    alert(" i will run evet time when count is update")

  },[count])



  // Variation 4
  useEffect(()=>{
    alert(" rame taje rame taje nmka namk")

  },[count,total])

  // Variation 5
  useEffect(() => {
    alert("ram ram")
  
    return () => {
      alert("count is unmounted")
    }
  }, [count])
  

  
  function handleClick(){
    setcount(count+1);
    
  }


  function totalclick(){
    settotal(total+1);
  }
  return (
    <div>
      <button onClick={handleClick}>
        clik me

      </button>
      <br />
      Count is {count}
      <br />




       <button onClick={totalclick}>
        clik me

      </button>
      <br />
      total  is {total}
    </div>
  )
}

export default App