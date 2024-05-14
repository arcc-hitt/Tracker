import React from 'react'
import Navbar from '../components/Navbar'
import Progress from '../components/Progress'
import Goals from '../components/Goals'

const Home = () => {
  return (
    <div className="pb-[70px]">
      <Progress />
      <Goals />
      <Navbar />
    </div>
  )
}

export default Home