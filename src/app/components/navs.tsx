import React from 'react'
import Image from 'next/image'

const Navs = () => {
  return (
    <div>
          {/* Images Section */}
      <div className="px-4 sm:px-8 md:px-16 flex justify-center sm:justify-between items-center py-8 flex-wrap">
        <Image src={"/frame.png"} alt="frame" width={217} height={344} className="mb-4 sm:mb-0" />

        <Image
          className="px-4 sm:px-8"
          src={"/Image.png"}
          alt="Image"
          width={892}
          height={182}
        />
      </div>
    
    </div>
  )
}

export default Navs