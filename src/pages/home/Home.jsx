import React from 'react'
import {Featured, TrustedBy} from '../../components'
import "./home.scss"

const Home = () => {
  return (
    <div className='home' >
      <Featured />
      <TrustedBy />
    </div>
  )
}

export default Home