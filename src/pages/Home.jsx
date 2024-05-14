import React from 'react'
import Navbar from '../components/Navbar'
import Progress from '../components/Progress'
import Goals from '../components/Goals'
import Graph from '../components/Graph'

const Home = () => {
  return (
    <div className="pb-[70px]">
      <Progress />
      <Goals />
      <Graph />
      <Navbar />
    </div>
  )
}

export default Home