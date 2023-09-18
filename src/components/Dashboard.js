import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import searchicon from '../assets/Search icon.png';
import notification from '../assets/bellicon.png';
import image from '../assets/image 1.png';
import rewards from '../assets/rewards.png';
import likes from '../assets/likes.png';
import users from '../assets/users.png';
import transactions from '../assets/transactions.png'

const Dashboard = () => {
    const { loginWithRedirect,isAuthenticated,user } = useAuth0();
    const { logout } = useAuth0();
  return (
    <div>
        <div className='flex justify-between'>
            <div className='text-black text-2xl font-bold'>
                <h1>Dashboard</h1>
            </div>

            <div className='relative flex flex-row px-[100px]'>
                <img src={searchicon} alt="searchicon" className='absolute left-[150px] top-2 ' />
                <input type="text" placeholder='Search...' className='bg-[white] px-[15px] w-[180px] rounded-[5px]'/>
                <img src={notification} alt="notificationbar" className='px-[12px]' />
                <img src={image} alt='loginimage' className='px-[18px] w-full h-full rounded-full ' />
                {isAuthenticated ? (<button className='' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>): (<button onClick={() => loginWithRedirect()}>Log In</button>)}
               
               {isAuthenticated &&  <p>{user.name}</p>}
            </div>
        </div>


        
        
<div className='flex md:flex-row gap-[17px]  pt-[40px] flex-col'>
    <div className='flex flex-row gap-[17px] sm:flex-row ' >

    <div className='shadow text-black w-full sm:w-[230px] w-[195px] h-[120px] bg-white border-[2px] px-[20px] py-[20px] rounded-[20px] hover:shadow-lg transform hover:scale-[105%] transition duration-300 ease-out'>
    <div className='bg-[#7FCC93] w-[31px] h-[31px] rounded-full p-1.5'>
      <img src={rewards} alt='rewards_icon' />
    </div>
    <p className='text-[11px] font-normal'>Total Rewards</p>
    <div className='flex flex-row items-center justify-between'>
      <p className='text-[21px] font-bold'>$2,129,430</p>
      <div className='w-[48px] h-[16px] bg-emerald-50 px-1 rounded-[34px]'>
        <p className='text-[10px] text-green-500 font-semibold'>+2.35%</p>
      </div>
    </div>
  </div>

  <div className='shadow text-black w-full sm:w-[230px]  w-[195px] h-[120px] bg-white border-[2px] px-[20px] py-[20px] rounded-[20px] hover:shadow-lg transform hover:scale-[105%] transition duration-300 ease-out'>
    <div className='bg-[#DDBE85] w-[31px] h-[31px] rounded-full p-1.5'>
      <img src={transactions} alt='rewards_icon' />
    </div>
    <p className='text-[11px] font-normal'>Total Transactions</p>
    <div className='flex flex-row items-center justify-between'>
      <p className='text-[21px] font-bold'>1520</p>
      <div className='w-[48px] h-[16px] bg-emerald-50 px-1 rounded-[34px]'>
        <p className='text-[10px] text-green-500 font-semibold'>+1.7%</p>
      </div>
    </div>
  </div>

</div>
 
<div className='flex flex-row gap-[17px] '>

<div className='shadow text-black w-full sm:w-[230px]  w-[195px] h-[120px] bg-white border-[2px] px-[20px] py-[20px] rounded-[20px] hover:shadow-lg transform hover:scale-[105%] transition duration-300 ease-out'>
    <div className='bg-[#EBA3A3] w-[31px] h-[31px] rounded-full p-1.5'>
      <img src={likes} alt='rewards_icon' />
    </div>
    <p className='text-[11px] font-normal'>Total Likes</p>
    <div className='flex flex-row items-center justify-between'>
      <p className='text-[21px] font-bold'>9721</p>
      <div className='w-[48px] h-[16px] bg-emerald-50 px-1 rounded-[34px]'>
        <p className='text-[10px] text-green-500 font-semibold'>+1.45%</p>
      </div>
    </div>
  </div>

  <div className='shadow text-black w-full sm:w-[230px]   w-[195px] h-[120px] bg-white border-[2px] px-[20px] py-[20px] rounded-[20px] hover:shadow-lg transform hover:scale-[105%] transition duration-300 ease-out'>
    <div className='bg-[#A8B0E5] w-[31px] h-[31px] rounded-full p-1.5'>
      <img src={users} alt='rewards_icon' />
    </div>
    <p className='text-[11px] font-normal'>Total Users</p>
    <div className='flex flex-row items-center justify-between'>
      <p className='text-[21px] font-bold'>9721</p>
      <div className='w-[48px] h-[16px] bg-emerald-50 px-1 rounded-[34px]'>
        <p className='text-[10px] text-green-500 font-semibold'>+4.2%</p>
      </div>
    </div>
  </div>
</div>
</div>

    </div>
  )
}

export default Dashboard