import React from 'react'
import Image from 'next/image'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import User from '../components/User'
import {SearchIcon,MicrophoneIcon,XIcon} from '@heroicons/react/solid'
// import search from '../pages/search'
const SearchHeader = () => {
    const searchInputRef = useRef(null);
    const router = useRouter()
    function search(event){
        event.preventDefault();
        const term = searchInputRef.current.value;
        if(!term.trim()) return;
        router.push(`/search?term=${term.trim()}`);
    }
  return (
    <header className='sticky top-0 bg-white'>
<div className="flex w-full p-6 items-center">
<Image  className='cursor-pointer' onClick={()=>router.push("/")} width="120" objectFit='contain' height="40" src="https://techcrunch.com/wp-content/uploads/2015/10/screen-shot-2015-10-08-at-4-20-16-pm.png"/>
<form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center ">
    <input type="text" className='w-full focus:outline-none' defaultValue={router.query.term} ref={searchInputRef} />
    <XIcon onClick={()=>(searchInputRef.current.value= "")} className='h-7 text-gray-500 cursor-pointer sm:mr-3'/>
    <MicrophoneIcon className='h-6 sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3 '/>
    <SearchIcon className='h-6 sm:inline-flex text-blue-500 '/>
    <button onClick={search} type="submit" hidden></button>
</form>
<User className="ml-auto whitespace-nowrap" />
</div>
    </header>
  )
}

export default SearchHeader