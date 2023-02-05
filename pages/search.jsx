import React from 'react'
import Head from 'next/head'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'
import { useRouter } from 'next/router'

const search = ({results}) => {
  // console.log(results)
  const router = useRouter()
  return (
    <div>
        <Head>
            <title>{router.query.term} - Search page</title>
        </Head>
        <SearchHeader/>
        <SearchResults results={results}/>

    </div>
  )
}

export default search
export async function getServerSideProps(context){
  const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}`)
  .then((response)=>response.json())
  return {
    props:{
      results:data 
    }
  }

}