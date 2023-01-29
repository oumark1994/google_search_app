import {useSession,signIn,SignOut} from 'next-auth/react'

const User = () => {
  const {data:session} = useSession();
  if(session){
    return (
      <>
      <img src={session.user.image} className="h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1  bg-gray-200 " onClick={SignOut }/>
      </>
    ) 
  }
  return (
    <><button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md" onClick={signIn}>Sign in</button></>
    
  )
}

export default User