import React from 'react'
import whtsapp from '../assets/whtsapp.png';
import mail from '../assets/Mail.png';
import insta from '../assets/insta.png';
import youtube from '../assets/youtube.png';

const Login = () => {
  return (
    <div className='bg-[white] w-[470px] h-[256px] border-2 shadow-lg rounded-[20px] px-[30px] py-[15px]  mt-[50px]'>
    <div className='w-[450px] px-[20px] '>
        <h1 className='mt-[20px] font-bold'>John Doe</h1>
        <div className='mt-[60px] flex flex-row gap-[60px] mb-[20px]'>
            <div className='flex flex-row gap-[10px]'>
                <img src={whtsapp} alt="whatsapp_icon" />
                <p className='underline'>+91134567890</p>
            </div>

            <div className='flex flex-row gap-[10px]'>
                <img src={insta} alt="insta_icon" />
                <p className='underline'>john_official</p>
            </div>
        </div>

        <div className='flex flex-row gap-[60px]'>
            <div className='flex flex-row gap-[10px]'>
                <img src={mail} alt="mail_icon" />
                <p className='underline'>john@xyz.com</p>
            </div>

            <div className='flex flex-row gap-[10px]'>
                <img src={youtube} alt="youtube_icon" />
                <p className='underline'>john_official</p>
            </div>
        </div>
</div>
    </div>
  )
}

export default Login