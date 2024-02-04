import React from 'react'

const Stats = () => {
  return (
    <div className='bg-white w-full rounded-[20px] shadow-lg flex flex-col mx-1 my-6 md:p-10 p-8 gap-8 border-2'>
        <h1 className='font-bold text-xl'>Weekely Stats</h1>

        <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Top Sales</p>
                    <p className='text-zinc-500'>Jonathon Doe</p>
                </div>
                <span className='bg-gray-300 rounded-[10px] items-center px-2 h-[20%]' >+46%</span>
            </div> 
        </div>

        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Best Seller</p>
                    <p className='text-zinc-500'>Product</p>
                </div>
                <span className='bg-gray-300 rounded-[10px] items-center px-2 h-[20%]' >+68%</span>
            </div>
        </div>

        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Top Sales</p>
                    <p className='text-zinc-500'>Jonathon Doe</p>
                </div>
                <span className='bg-gray-300 rounded-[10px] items-center px-2 h-[20%]' >+68%</span>
            </div>
        </div>


    </div>
  )
}

export default Stats