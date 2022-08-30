import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='flex justify-between p-8 py-10 text-sm text-gray-700'>
      <h1 className='text-gray-700 text-lg'>Steve Braco</h1>
      <Nav />
    </header>
  )
}

export default Header
