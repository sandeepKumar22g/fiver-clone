import React from 'react'
import { CatCard, Featured, Slide, TrustedBy, Explorer, ProjectCard } from '../../components'
import "./home.scss"
import { cards, projects } from '../../data'

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
      <Slide >
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  )
}

export default Home