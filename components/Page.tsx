import React from 'react'
import Header from './Header'

const Page = ({children} : any) => {
  return (
    <>
    <Header />
    <div>{children}</div>
    </>
  )
}

export default Page
