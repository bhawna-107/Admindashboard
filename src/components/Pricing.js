import React from 'react'
import Sidebar from './Sidebar'

const Pricing = () => {
  return (
    <div className='flex flex-row m-8'>
        <div className='lg:w-1/5 lg:block hidden  w-0'>
            <Sidebar />
         </div>

         <div className='lg:w-4/5 w-full'>
         <div className='flex flex-col gap-12 bg-[#F8F9FC] m-12'>
        <h1 className='text-3xl font-bold '>Pricing</h1>

        <div className='flex flex-wrap justify-between gap-4 '>
            <div className=' lg:w-[30%] md:w-[45%] w-full'>

            <div className=' w-full bg-white text-center gap-8 p-8 rounded-[20px]'>
                <p className='font-semibold p-2 text-2xl'>Silver</p>
                <h1 className='font-bold pt-6 text-4xl'>$35</h1>
                <p className='text-zinc-500 pb-6'>Per month</p>

                <p className='p-2 text-lg' >3 Members</p>
                <p className='p-2 text-lg'>Single Device</p>
                <p className='p-2 text-lg'>50 GB Storage</p>
                <p className='p-2 text-lg'>Monthly Backups</p>
 
                <button className='bg-blue-500 w-full rounded-[5px] text-white text-lg mt-4 py-2'>Sign Up</button>
            </div>
           

                
            </div>

            <div className=' lg:w-[30%] md:w-[45%] w-full '>

            <div className=' w-full bg-white text-center gap-8 p-8 rounded-[20px] relative'>
                <div className='bg-yellow-300 text-white absolute bottom-[97%] left-[30%] rounded-[10px] px-7 py-1'>
                    <p>Popular</p>
                </div>
                <p className='font-semibold p-2 text-2xl'>Platinum</p>
                <h1 className='font-bold pt-6 text-4xl'>$45</h1>
                <p className='text-zinc-500 pb-6'>Per month</p>

                <p className='p-2 text-lg' >10 Members</p>
                <p className='p-2 text-lg'>Single Device</p>
                <p className='p-2 text-lg'>80 GB Storage</p>
                <p className='p-2 text-lg'>Monthly Backups</p>

                <button className='bg-red-400 w-full rounded-[5px] text-white text-lg mt-4 py-2'>Sign Up</button>
            </div>
           

                
            </div>

            <div className=' lg:w-[30%] md:w-[45%] w-full'>

            <div className=' w-full bg-white text-center gap-8 p-8 rounded-[20px]'>
                <p className='font-semibold p-2 text-2xl'>Diamond</p>
                <h1 className='font-bold pt-6 text-4xl'>$55</h1>
                <p className='text-zinc-500 pb-6'>Per month</p>

                <p className='p-2 text-lg' >15 Members</p>
                <p className='p-2 text-lg'>Single Device</p>
                <p className='p-2 text-lg'>1TB Storage</p>
                <p className='p-2 text-lg'>Monthly Backups</p>

                <button className='bg-blue-500 w-full rounded-[5px] text-white text-lg mt-4 py-2'>Sign Up</button>
            </div>
           

                
            </div>

        </div>
    </div>
         </div>
    </div>
    
  )
}

export default Pricing