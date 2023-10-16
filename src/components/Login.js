import React, {useState, useEffect} from 'react'
import whtsapp from '../assets/whtsapp.png';
import mail from '../assets/Mail.png';
import insta from '../assets/insta.png';
import youtube from '../assets/youtube.png';
import profile from '../assets/profile.png';
import Modal from './Modal';
import close from '../assets/close icon.png';
import { auth } from '../config/firebase'; // Import your Firebase configuration
import { onAuthStateChanged } from 'firebase/auth';

const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [saveDetails, setSaveDetails] = useState(() =>{
      const savedDetails = localStorage.getItem('saveDetails');
      return savedDetails ? JSON.parse(savedDetails) : null;
    });
    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
      const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      });
  
      return () => {
        unsubscribeAuth(); // Unsubscribe from auth state changes on component unmount
      };
    }, []); // Only run this effect once (on component mount)
    const handleModalToggle = () => {
      setIsModalOpen(!isModalOpen);
    };

    const handleSaveDetails =(details) =>{
      setSaveDetails(details);
      localStorage.setItem('saveDetails', JSON.stringify(details));

    }



  return (


<div className='bg-[white]   h-[256px] border-2 shadow-lg rounded-[20px]   px-[50px] py-[10px] mt-[50px] '>

  
  
      
{currentUser && (
      isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-black bg-opacity-50 absolute inset-0" />
          <div className="w-full lg:w-1/3 md:w-1/2 sm:w-1/2 h-[45%]  shadow-lg rounded-[20px] mt-50px relative">
          
            <Modal onClose={() => setIsModalOpen(false)} onSave={handleSaveDetails}/>
            <button onClick={handleModalToggle}><img className='absolute left-[90%] top-[2.5%] ' src={close} alt='close-icon' /> </button>
          </div>
        </div>
      )
      )}

     {currentUser && saveDetails && (
        <div className='py-4 flex flex-col justify-center gap-4'>
          
          <div className='font-bold text-lg'>
            {currentUser.displayName}
          </div>
          <div className='flex flex-col gap-2'>
          {saveDetails.Contact && 
          (<div className='flex gap-2'>
            <div className='rounded-full w-[25px] h-[25px] bg-green-100 p-1'>
              <img src={whtsapp} alt="contact" />
            </div>
              <p className='font-normal underline'> {saveDetails.Contact}</p>  
          </div>) }

          {saveDetails.YoutubeLink && 
          (<div className='flex gap-2'>
            <div className='rounded-full w-[25px] h-[25px] bg-red-200 p-1'>
              <img src={youtube} alt="contact" />
            </div>
              <p className='font-normal underline'> {saveDetails.YoutubeLink}</p>  
          </div>) }

          {saveDetails.InstagramLink && 
          (<div className='flex gap-2'>
            <div className='rounded-full w-[25px] h-[25px] bg-pink-200 p-1'>
              <img src={insta} alt="contact" />
            </div>
              <p className='font-normal underline'> {saveDetails.InstagramLink}</p>  
          </div>) }
          </div>
         
          <div className='pl-[85%] pb-[12px]'>

          <div className='bg-gray-100   rounded-full curser-pointer  p-2 flex items-center' onClick={handleModalToggle}>
            {/* <p>Add Details</p> */}
           
              <img src={profile} alt="add profile" />
          </div>


          </div>
          
          
        </div>
      )
  //     :
  //     <div className='flex flex-col items-center py-[60px]'>
  //     <button onClick={handleModalToggle}>
  //       <img src={profile} alt="add profile" />
  //      </button>
  //      <p className='font-bold text-xl text-zinc-500'>Add Profile</p>
      
  //  </div>
   }
    </div>

    
   
    
   
  )
}

export default Login