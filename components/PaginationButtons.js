import React from 'react'

import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import Link from 'next/link'
const PaginationButtons = () => {
    const router = useRouter()
    const startIndex = Number(router.query.start) || 1;
  return (
    <div className="text-blue-700 flex px-9 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
 {startIndex < 90 && (
 <Link href={`/search?term=${router.query.term}&searchType=${router.query.searchType}&start=${startIndex - 10}`}>
 <div className="cursor-pointer flex flex-col items-center hover:underline">
     <ChevronLeftIcon className='h-5'/>
     <p>Previous</p>     
 </div>
</Link>
        )}
{startIndex < 90 && (
 <Link href={`/search?term=${router.query.term}&searchType=${router.query.searchType}&start=${startIndex + 10}`}>
 <div className="cursor-pointer flex flex-col items-center hover:underline">
     <ChevronRightIcon className='h-5'/>
     <p>Next</p>     
 </div>
</Link>
        )}
       
    </div>
  )
}

export default PaginationButtons