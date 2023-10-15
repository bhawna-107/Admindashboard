import React from 'react'
import Sidebar from './Sidebar'
import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';
import Login from './Login';
import Statschart from './Statschart';

const Dashboard = () => {


   
  return (

    <div className='w-full h-full flex flex-row lg:p-12 md:p-8 sm:p-5 box-border gap-12'>
  <div className='lg:w-1/5 md:w-1/4 sm:w-1/3 w-0'>
    <Sidebar />
  </div>
  <div className='w-4/5'>
    <div className=' '>
      <Statschart />
      <BarChart />
    </div>

    <div className='flex w-full lg:flex-row flex-col gap-5 '>
    <div className='lg:w-1/2 '>
      <DoughnutChart />
    </div>
    <div className='lg:w-1/2'>
      <Login />
    </div>

    </div>
   
  </div>
</div>

    


      

  )
}

export default Dashboard;