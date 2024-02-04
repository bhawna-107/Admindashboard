import React from 'react'
import Sidebar from './Sidebar'
import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';
import Login from './Login';
import Statschart from './Statschart';
import Navbar from './Navbar';
import Stats from './Stats';

const Dashboard = () => {


   
  return (
<div>
   <Navbar />
   <div className='w-full h-full flex flex-row lg:p-12 md:p-10 p-8 box-border lg:gap-12'>
      
  <div className='lg:w-1/5 lg:block hidden  w-0 h-700'>
    <Sidebar />
  </div>
  <div className='lg:w-4/5 w-full'>
    <div className=' '>
      <Statschart />
    <div className='flex md:flex-row flex-col w-full gap-3 h-auto'>

        <div className='lg:w-2/3  w-full'>
          <BarChart />
        </div>

        <div className='lg:w-1/3 md:w-1/2 w-full h-full'>
          <Stats />
      </div>
    </div>
      
      
    </div>

    <div className='flex w-full sm:flex-row flex-col gap-5 '>
    <div className='sm:w-1/2 '>
      <DoughnutChart />
    </div>
    <div className='sm:w-1/2'>
      <Login />
    </div>

    </div>
   
  </div>
</div>
   
  </div>
    

    


      

  )
}

export default Dashboard;