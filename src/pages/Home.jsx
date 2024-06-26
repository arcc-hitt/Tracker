import React from 'react'
import Progress from '../components/Progress'
import Goals from '../components/Goals'
import Graph from '../components/Graph'

const Home = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-between items-center space-y-4 space-x-0 pb-[70px]">
        <Progress />
        <Goals />
        <Graph />
      </div>
    </>
  )
}

export default Home