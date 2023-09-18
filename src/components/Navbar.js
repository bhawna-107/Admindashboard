import React,{useState} from 'react';
import dashboard_icon from '../assets/dashboard_icon.png';
import schedule_icon from '../assets/schedule_icon.png';
import setting_icon from '../assets/setting_icon.png';
import transaction_icon from '../assets/transaction_icon.png';
import user_icon from '../assets/user_icon.png';
import close from "../assets/close.png";
import menu1 from '../assets/menu1.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='md:hidden flex cursor-pointer justify-between bg-gradient-to-b from-blue-500 to-blue-500 w-full h-[40px] items-center px-[10px]'>
        <div className='flex'>
            <h1 className='text-white font-bold text-[20px]'>Board.</h1>
        </div>
        <div className=' flex cursor-pointer text-white'>
          <img
            src={toggle ? close : menu1}
            alt='menu'
            className='w-[28px] h-[28px] object-contain color:black'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 blue-gradient absolute top-3 right-0 mx-4 my-2 min-w-[141px] z-10 `}
          >
            
            <div className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
            <div className=' bg-gradient-to-b from-blue-500 to-blue-500 rounded-[20px] h-screen'>
            <h1 className=" px-[50px] py-[60px] text-white text-4xl  font-bold ">Board.</h1>

            <div className='flex flex-col px-[50px] justify-center text-white'>
                <div className='flex flex-row gap-[20px] pb-[40px] text-lg font-bold items-center'>
                    <img className="w-[18px] h-[18px]" src={dashboard_icon} alt="dash_icon" />
                    <h2>Dashboard</h2>
                </div>

                <div className='flex flex-row gap-[20px] pb-[40px] text-lg font-normal items-center'>
                    <img className="w-[18px] h-[18px]" src={transaction_icon} alt="dash_icon" />
                    <h2 >Transactions</h2>
                </div>

                <div className='flex flex-row gap-[20px] pb-[40px] text-lg font-normal items-center'>
                    <img className="w-[18px] h-[18px]" src={schedule_icon} alt="dash_icon" />
                    <h2>Schedules</h2>
                </div>

                <div className='flex flex-row gap-[20px] pb-[40px] text-lg font-normal items-center'>
                    <img className="w-[18px] h-[18px]" src={user_icon} alt="dash_icon" />
                    <h2>Users</h2>
                </div>

                <div className='flex flex-row gap-[20px] pb-[40px] text-lg font-normal items-center '>
                    <img className="w-[18px] h-[18px]" src={setting_icon} alt="dash_icon" />
                    <h2>Settings</h2>
                </div>
            </div>

            <div className='text-white px-[50px] text-sm py-[80px]  '>
                <div className='flex flex-col gap-[20px]'>
                    <h2>Help</h2>
                    <h2>Contact Us</h2>
                </div>
            </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar
