import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = () => {
  return (
    <div className='py-10 flex gap-10 items-center h-[90vh] bg-amber-950 px-18'>
      <Leftcontent></Leftcontent>
      <Rightcontent></Rightcontent>
    </div>
  )
}

export default Page1content