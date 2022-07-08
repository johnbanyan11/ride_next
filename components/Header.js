import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='bg-black py-3 px-14 flex flex-row justify-between items-center'>
        <h1 className='font-bold text-4xl text-white'>Edvora</h1>
        <div className="text-white flex gap-4 items-center" >
            <h3 className='font-bold'>Peter Parker</h3>
            <Image src='/user-img.jpg' className='rounded-full' width='50px' height='50px' objectFit='cover' alt=''/>
            {/* <p className='rounded-full p-1 bg-blue-100'>image</p> */}
        </div>
    </div>
  )
}

export default Header