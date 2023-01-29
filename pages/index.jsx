import Head from 'next/head'
import Header from 'components/Header'
import Image from 'next/image'
import Footer from 'components/Footer'
import {useRouter} from 'next/router'
import { useRef } from 'react'
import {SearchIcon,MicrophoneIcon} from '@heroicons/react/solid'
export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null)
  function search(event){
    event.preventDefault();
    const term = searchInputRef.current.value;
    if(!term.trim()) return;
    router.push(`/search?term=${term.trim()}@searchType=`)  

  }
  return (
    <>
      <Head>
        <title>google search</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Header/>
<form  className="flex flex-col items-center mt-50">
  <Image width="300" objectFit='cover' height="100" src="https://techcrunch.com/wp-content/uploads/2015/10/screen-shot-2015-10-08-at-4-20-16-pm.png"/>
  <div className=" flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg py-3 px-5 rounded-full items-center sm:max-w-lg lg:max-w-2xl ">
    <SearchIcon className="h-5 text-gray-500 mr-3"/>
    <input ref={searchInputRef} type="text" className='flex-grow focus:outline-none'/>
    <MicrophoneIcon className="h-5 "/>
  </div>
  <div className='flex flex-col sm:flex-row w-[50%] space-y-3 mt-8 sm:space-y-0 sm:space-x-4 justify-center'>
  <button onClick={search} className='btn'>Google Search</button>
  <button className='btn'>I'm feeling lucky</button>
  </div>
  
</form>
<Footer/>
    </>
  )
}
