import React from 'react'
import { CatCard, Featured, Slide, TrustedBy, Explorer } from '../../components'
import "./home.scss"
import { cards } from '../../data'

const Home = () => {
  return (
    <div className='home' >
      <Featured />
      <TrustedBy />
      <Slide >
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <Explorer />
      
    </div>
  )
}

export default Home