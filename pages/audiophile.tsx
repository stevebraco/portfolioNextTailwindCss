import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import DisplayMac from '../components/DisplayMac'

const AudioPhile = () => {
  return (
    <div className='text-gray-400  max-w-[1200px] my-0 mx-auto'>
      <h2 className='text-gray-400 text-6xl'>Audiophile</h2>
      <span className='text-sm'>Projet Personnel</span>
      <ul className='text-lg'>
      <li>View the optimal layout for the app depending on their devices screen size,</li>
      <li>See hover states for all interactive elements on the page,</li>
      <li>Create, read, update, and delete product feedback requests,</li>
      <li>Receive form validations when trying to create/edit feedback requests,</li>
      <li>Sort suggestions by most/least upvotes and most/least comments,</li>
      <li>Filter suggestions by category,</li>
      <li>Add comments and replies to a product feedback request,</li>
      <li>Upvote product feedback requests,</li>
      </ul>
    </div>
  )
}

export default AudioPhile
