import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import whtsapp from '../assets/whtsapp.png';
import mail from '../assets/Mail.png';
import insta from '../assets/insta.png';
import youtube from '../assets/youtube.png';
import profile from '../assets/profile.png';

const Login = () => {
    const { loginWithRedirect,isAuthenticated,user } = useAuth0();

  return (
    <div className='bg-[white] lg:w-[470px] w-[355px] h-[256px] border-2 shadow-lg rounded-[20px] px-[30px] py-[15px]  mt-[50px]'>

        {isAuthenticated ? <div className='w-[450px] px-[20px] '>
    {isAuthenticated ?  <h1 className='mt-[10px] font-bold text-xl'>{user.name}</h1> : <h1 className='mt-[20px] font-bold text-xl'>Username</h1>}

        {/* <h1 className='mt-[20px] font-bold text-xl'></h1> */}
        <div className='flex flex-col gap-[2px]'>
        <div className='mt-[30px] flex flex-col md:flex-row gap-[10px] mb-[20px]'>
            <div className='flex flex-row gap-[10px] '>
                <div className="bg-green-200 p-1 w-[25px] h-[25px] rounded-full">
                <img src={whtsapp} alt="whatsapp_icon" />
                </div>
                <p className='underline'>+91134567890</p>
            </div>

            <div className='flex flex-row gap-[10px]'>
                <div className="bg-rose-200 p-1 w-[25px] h-[25px] rounded-full">
                <img src={insta} alt="insta_icon" />
                </div>
                
                <p className='underline'>user_official</p>
            </div>
        </div>

        <div className='flex flex-col md:flex-row gap-[10px]'>
            <div className='flex flex-row gap-[10px]'>
                <div className="bg-violet-200 w-[25px] p-0.5 h-[25px] rounded-full">
                <img src={mail} alt="mail_icon" />
                </div>
                {isAuthenticated ? <p className='underline'>{user.email}</p> :<p className='underline'>user@email.com</p> }
            </div>

            <div className='flex flex-row gap-[10px]'>
                <div className="bg-red-200 p-1  w-[25px] h-[25px] rounded-full">
                <img src={youtube} alt="youtube_icon" />
                </div>
                <p className='underline'>user_official</p>
            </div>
        </div>
        </div>
</div> : <div className='flex flex-col gap-[5px] justify-center items-center py-[60px]'>
      {!isAuthenticated && <div className=''> 
    <button onClick={() => loginWithRedirect()}><img src={profile} alt="add_profile" /></button> </div>}
                               {/* </div> */}
                
            {/* </div> */}
        <h1 className='font-bold text-xl'> Add Profile </h1>
    </div>}
    
    </div>
  )
}

export default Login