import React from 'react'
import User from 'components/User'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Header = () => {
  const router = useRouter()
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center px-3">
      <a href="https://about.google/" className='link mx-2'>About</a>
      <a href="https://store.google.com" className='link mx-2'>Store</a>
      </div> <div className=" flex saace-x-4 items-center">
      <Link className='link' href='https://mail.google.com'>Gmail</Link>
       <a  onClick={()=>router.push(`/search?term=${router.query.term || "google"}&searchType=image`)} className='link'>Images</a>
      <User/>
      </div>
    </header>
  )
}

export default Header