import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import dashboard_icon from '../assets/dashboard_icon.png';
import schedule_icon from '../assets/schedule_icon.png';
import setting_icon from '../assets/setting_icon.png';
import transaction_icon from '../assets/transaction_icon.png';
import user_icon from '../assets/user_icon.png';


const Sidebar = () => {
    const navigate = useNavigate();

    const handlePricing = () =>{
        navigate('/pricing');
    }
  return (
    <>
        <div className='z-20 bg-gradient-to-b from-blue-500 to-blue-500 rounded-[20px] fixed lg:flex flex-col  hidden overflow-hidden h-[650px]'>
            <h1 className=" px-[50px] py-[40px] text-white text-4xl  font-bold ">Board.</h1>

            <div className='flex flex-col px-[50px] justify-center text-white'>
                <div className='flex flex-row gap-[20px] pb-[30px] text-lg font-bold items-center cursor-pointer'>
                    <img className="w-[18px] h-[18px]" src={dashboard_icon} alt="dash_icon" />
                    <Link to="/">Dashboard</Link>
                </div>

                <div className='flex flex-row gap-[20px] pb-[30px] text-lg font-normal items-center cursor-pointer'>
                    <img className="w-[18px] h-[18px]" src={transaction_icon} alt="dash_icon" />
                    <h2 >Transactions</h2>
                </div>

                <div className='flex flex-row gap-[20px] pb-[30px] text-lg font-normal items-center cursor-pointer'>
                    <img className="w-[18px] h-[18px]" src={transaction_icon} alt="dash_icon" />
                    
                    <button onClick={handlePricing}>Pricing</button>
                </div>

                <div className='flex flex-row gap-[20px] pb-[30px] text-lg font-normal items-center cursor-pointer'>
                    <img className="w-[18px] h-[18px]" src={schedule_icon} alt="dash_icon" />
                    <h2>Schedules</h2> 
                </div>

                <div className='flex flex-row gap-[20px] pb-[30px] text-lg font-normal items-center cursor-pointer'>
                    <img className="w-[18px] h-[18px]" src={user_icon} alt="dash_icon" />
                    <h2>Users</h2>
                </div>

                <div className='flex flex-row gap-[20px] pb-[30px] text-lg font-normal items-center cursor-pointer '>
                    <img className="w-[18px] h-[18px]" src={setting_icon} alt="dash_icon" />
                    <h2>Settings</h2>
                </div>
            </div>

            <div className='text-white px-[50px] text-lg py-[30px] cursor-pointer '>
                <div className='flex flex-col gap-[10px]'>
                    <h2>Help</h2>
                    <h2>Contact Us</h2>
                </div>
            </div>
    </div>

   
    </>
  );
};


export default Sidebar