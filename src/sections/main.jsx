import React from 'react'
import { Home } from '../pages/Home'
import { Front } from './front'
import { useAppContext } from '../ovelrays/context'
import { useGetfriends } from '../firestore/useFriends'
import { Sh } from '../ovelrays/share1'
import { Sh2 } from '../ovelrays/Share2'
import { Sh3 } from '../ovelrays/share3'
import { Sh4 } from '../ovelrays/share4'

export const Main = () => {
  const {
    modal,
    modal2,
    modal3,
    modal4,
  } = useAppContext();
    const{friends}=useGetfriends()    
    useAppContext()
    return (
    <div>{friends.length>0 ? <Home/> : <Front/>}
      <div>
        {modal  && <Sh  />}
        {modal2 && <Sh2 />}
        {modal3 && <Sh3 />}
        {modal4 && <Sh4 />}
      </div>
    </div>
  )
}


