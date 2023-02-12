import React from 'react'
import PaginationButtons from './PaginationButtons'
import Image from 'next/image'

const ImageResult = ({results}) => {
  return (
    <div className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4  ">
            {results.items?.map((result)=>(
                <div className='group mb-8' key={result.link}>
                    <div className='group'>
                    <a href={result.image.contextLink}>
                            <Image className="group-hover:shadow-xl w-full h-60 object-contain" src={result.link} alt={result.title}  />
                            <h2 >{result.title}</h2>
                        </a>
                        <a className="group-hover:underline" href={result.image.contextLink}>
                            <h2 className="truncate text-xl " >{result.title}</h2>
                        </a>
                        <a className="group-hover:underline" href={result.image.contextLink}>
                            <Image src={result.link} alt={result.title}/>
                            <p className="text-gray-600">{result.displayLink}</p>
                        </a>
                    </div>
                </div>
            ))}
        </div>
        <div className='ml-16'>
            <PaginationButtons/>
        </div>
    </div>
  )
}

export default ImageResult