import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const AppHeader = () => {
  const menuOptions =[
    {
      id:1,
      name:'Home',
      path:'/home'
    },
    {
      id:2,
      name:'History',
      path:'/history'
    },
    {
      id:3,
      name:'Pricing',
      path:'/pricing'
    },
    {
      id:4,
      name:'Profile',
      path:'/profile'
    },
  ]
  return (
    <div className='flex justify-between items-center p-4 shadow px-10 md:px-20 lg:px-40'>
      <Image src={'/logo.svg'} alt='logo' width={60} height={30}/>
      <div className='hidden md:flex gap-12 items-center'>
        {menuOptions.map((option,index)=>(
          <div key={index}>
<h2 className='hover:font-bold cursor-pointer transition-all'>{option.name}</h2>
            </div>
        )
        )}
      </div>
      <UserButton/>
    </div>
  )
}

export default AppHeader