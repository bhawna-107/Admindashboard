import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../config/firebase'; // Import your Firebase configuration
import { onAuthStateChanged } from 'firebase/auth';

const Modal = (props) => {


    const [selectedTab, setSelectedTab] = useState('basic');
    // Apply 'fixed' style conditionally

    const [currentUser, setCurrentUser] = useState(null);
    const [socialLinks, setSocialLinks] = useState({
      InstagramLink: '',
      YoutubeLink: '',
      Name: '',
      Email: '',
      Contact: ''
      // Add other social media fields as needed
    });
  
    useEffect(() => {
      const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      });
  
      return () => {
        unsubscribeAuth(); 
      };
    }, []); 
  
    useEffect(() => {
      // Load existing social links for the user if available
      if (currentUser) {
        const loadSocialLinks = async () => {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists()) {
            setSocialLinks(userDoc.data());
          }
        };
        loadSocialLinks();
      }
    }, [currentUser]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSocialLinks((prevLinks) => ({
        ...prevLinks,
        [name]: value
      }));
    };
  
    const handleSave = async (e) => {
      // Update the user's document in Firestore with the social links
      e.preventDefault();
      await setDoc(doc(db, 'users', currentUser.uid), {
        ...socialLinks,
        updatedAt: serverTimestamp()
      });
      handleModal();
      props.onSave(socialLinks);
  
 
    };


    const handleTabChange = (tab) => {
       
      setSelectedTab(tab);
    };

    const handleModal = () => {
        if(props.onClose) props.onClose();
    }
  return (
    
    <div className={`    `}>
      <div className='bg-[white] rounded-[5px] shadow-lg  border-2 shadow-lg rounded-[10px] justify-center items-center' onClick={(event) => 
            event.stopPropagation()}>

        <div className='flex flex-col gap-2 m-4'>
            <h1 className='font-bold border-b-2'>Add Profile Details</h1>
            <div className=' flex flex-col gap-5 my-3'>
                <div className='flex  gap-2'>
                <button
          className={`tab-btn ${selectedTab === 'basic' ? 'border-blue-500' : ''}  border-b-4 font-bold text-lg w-[50%] text-center`}
          onClick={() => handleTabChange('basic')}
        >
          Basic
        </button>
        <button
          className={`tab-btn ${selectedTab === 'social' ? 'border-blue-500' : ''}  border-b-4 font-bold text-lg w-[50%] text-center`}
          onClick={() => handleTabChange('social')}
        >
          Social
        </button>
                </div>
       
        {selectedTab === 'social' ? (
        <form>
            <div className='flex flex-col gap-3'>
            <div className='flex  flex-col gap-1 '>
            <label className='font-semibold '>InstagramProfile : <span className='text-zinc-500'>(optional)</span></label>
            <input className="border-2  p-1 rounded-[5px]" type='text' placeholder='Eg. ..instagram.com/username ' onChange={handleInputChange} value={socialLinks.InstagramLink} name='InstagramLink'/>
            </div>

            <div className='flex  flex-col gap-1 '>
            <label className='font-semibold '>YoutubeProfile : <span className='text-zinc-500'>(optional)</span></label>
            <input className="border-2  p-1 rounded-[5px]" type='text' placeholder='Eg. ..youtube/username' onChange={handleInputChange} value={socialLinks.YoutubeLink} name='YoutubeLink'/>
            </div>

        <div className='flex gap-4 '>

                <div className='text-center w-[20%] p-2 bg-gray-100 text-black rounded-[5px]'>
               <button onClick={() => handleTabChange('basic')} className="font-bold">Back</button>
               

            </div>

            <div className='text-center w-[20%] p-2 bg-blue-500 text-white rounded-[5px]'>
               <button onClick={handleSave} className="font-bold">Save</button>

            </div>

        </div>
            

            

            </div>
            
            
        </form>
): 
        <form>
            <div className='flex flex-col gap-3'>
            <div className='flex  flex-col gap-1 '>
            <label className='font-semibold '>Name : *</label>
            <input className="border-2  p-1 rounded-[5px]" type='text' placeholder='Eg. John Doe' onChange={handleInputChange} value={socialLinks.Name} name='Name' required/>
            </div>

            
            <div className='flex  flex-col gap-1 '>
            <label className='font-semibold '>Contact : *</label>
            <input className="border-2  p-1 rounded-[5px]" type='number' placeholder='Eg. +9112345678' onChange={handleInputChange} value={socialLinks.Contact} name='Contact' required/>
            </div>
            <div className='text-center w-[20%] p-2 bg-blue-500 text-white rounded-[5px]'>
               <button onClick={() => handleTabChange('social')}className="font-bold">Next</button>
            </div>
           

            

            </div>
            
            
        </form>
}
        </div>
        </div>
        
        
   </div>

      </div>
      

 
    
  )
}

export default Modal;