import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div>
      <div className='w-full min-h-[70vh] px-16 py-20'>
        <h1>Home/Contact</h1>
      <Image
        src = {"/call.png"}
        alt = "call"
       width={135}
       height={323}
      


      />
      </div>
    </div>
  )
}

export default Contact