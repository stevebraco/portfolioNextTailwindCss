import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='space-x-10'>
      <Link href='/project'>Project</Link>
      <Link href='/contact'>Contact</Link>
    </nav>
  )
}

export default Nav
