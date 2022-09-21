import React from 'react'
import Image from 'next/image'

const Story = ({name, image}) => {
  return (
    <div>
        <Image src={image} alt="profile image" className=''/>
        <p>{name}</p>
    </div>
  )
}

export default Story