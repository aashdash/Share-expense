import React from 'react'
import { Home } from '../pages/Home'
import { Front } from './front'
import { useAppContext } from '../ovelrays/context'
import { useGetfriends } from '../firestore/useFriends'

export const Main = () => {
    const{friends}=useGetfriends()    
    useAppContext()
    return (
    <div>{friends.length>0 ? <Home/> : <Front/>}</div>
  )
}


