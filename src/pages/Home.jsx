import React from 'react'
import Sidebar from '../components/home/Sidebar'


import Main from '../components/home/Main'
// import Main from '../components/homeComponents/Main'
const Home = () => {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='flex flex-col w-full'>
      
        <Main/>
        {/* <Main /> */}
      </div>
    </div>
  )
}


export default Home
