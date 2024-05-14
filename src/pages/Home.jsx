import React from 'react'
import Navbar from '../components/Navbar'
import Progress from '../components/Progress'
import Goals from '../components/Goals'

const Home = () => {
  return (
    <div>
      <Progress />
      <Goals />
      <Navbar />
    </div>
  )
}

export default Home