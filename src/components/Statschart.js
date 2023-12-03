import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import notification from '../assets/bellicon.png';
import searchicon from '../assets/Search icon.png';
import trending from '../assets/trending.png';
import girlphoto from '../assets/girlphoto1.png';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

const Statschart = () => {
    const [statData, setStatData] = useState({});
    const [user,setUser] = useState();
    const [errmsg, seterrmsg] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) =>{
        if(user){
          setUser(user);
        }
        else{
          setUser(null);
        }
        unsubscribe();
      }, []);

    })

    // var baseUrl = "https://api.coinranking.com/v2/stats";
    var baseUrl1 = "https://api.coingecko.com/api/v3/search/trending";
  
  var apiKey = "coinranking52e99fe8f66f56849a31504efe5dc8483d07d43424301bc6";
  
    // Fetch data for dataset1 and dataset2 (replace with your data fetching logic)
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch data for Dataset 1
          const response1 = await fetch(`${baseUrl1}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              // 'x-access-token': `${apiKey}`,
              'Access-Control-Allow-Origin': "*"
            }
          });
          const data1 = await response1.json();
          setStatData(data1);
          console.log(data1);
        }
        catch(err){
            console.log(err);
        }}
        fetchData()
    },[baseUrl1]);

    const handleLogout = async() =>{
      try{
        await signOut(auth)
        navigate('/login');
      }
      catch(err){
        seterrmsg(err.message);
      }
      
    }
  return (

    
    
    <div className='flex flex-wrap flex-col  '>

      <div className='mb-5 '> 
        <div className='flex flex-row justify-between gap-4 mb-4'>
          <div>
            <h1 className='font-bold text-3xl text-blue-500'>DashBoard</h1>
          </div>
          <div className='flex lg:gap-3  gap-2 items-center'>
            <div className='relative sm:block hidden'>
            <input className=" rounded-[15px] px-2 sm:w-full w-3/4" type='text'  placeholder='Search'/>
              <img className="absolute top-[20%] lg:right-[5%] right-[10%]" src={searchicon} alt='searchicon' />
            </div>
            <img src={notification} alt='bellicon'/>

{user ? (
  <div className='flex gap-2'>
    {/* <div className='rounded-full bg-red-400 px-2.5 py-1 text-white w-[30px] h-[30px] font-bold'>
      <p>{user.displayName.charAt(0).toUpperCase()}</p>
    </div> */}
    {user.photoURL ? (
      <img className='rounded-full w-[30px] h-[30px]' src={user.photoURL} alt="userpic" />
    ): <div className='rounded-full bg-red-400 px-2.5 py-1 text-white w-[30px] h-[30px] font-bold'>
    <p>{user.displayName.charAt(0).toUpperCase()}</p>
  </div>}
    <div className='bg-blue-500 rounded-[15px] px-2 py-1 text-white'>
      <button onClick={handleLogout}>
       Logout 
      </button>
    </div>
  </div>
) : (
  <div className='bg-blue-500 rounded-[15px] px-2 py-1 text-white'>
    <button>
      <Link to={'/login'}>Login</Link>
    </button> 
  </div>
)}




</div>
</div>


 
<div className="flex flex-wrap justify-between md:gap-2 sm:gap-4 gap-10  "> 

{user ? (
<div className="w-full h-[180px] sm:w-[44%] md:w-[48%] lg:w-[calc(50%-0.5rem)]" >
  <div className="border-2   text-white rounded-[20px] bg-[#FF638499] p-5 md:p-5 flex flex-col gap-1 transition-transform transform duration-200 ease-in-out hover:scale-105 border-2 shadow-lg">
          <div className='flex flex-row relative gap-6'>
          <div >
          <div className='flex flex-col gap-2 font-semibold lg:text-[20px] md:text-[14px] sm:text-[12.5px] text-[20px] mb-2'>
          <h2>Hey {user.displayName},</h2>
          <h2>Download Latest Report</h2>
          </div>
          <button className='bg-white text-black  px-4 py-2 rounded-[20px]'>Download</button>
          

          </div>
          <img className=" w-[42%] h-[70%] z-4" src={girlphoto} alt="girl sitting"/>
          

          </div>
          
   

  </div>
  </div>)
  : (<div className="w-full h-[180px] sm:w-[44%] md:w-[48%] lg:w-[calc(50%-0.5rem)]" >
  <div className="border-2   text-white rounded-[20px] bg-[#FF638499] p-5 md:p-5 flex flex-col gap-1 transition-transform transform duration-200 ease-in-out hover:scale-105 border-2 shadow-lg">
          <div className='flex flex-row relative gap-6'>
          <div >
          <div className='flex flex-col gap-2 font-semibold lg:text-[20px] md:text-[14px] sm:text-[12.5px] text-[20px] mb-2'>
          <h2>Hey YourName,</h2>
          <h2>Download Latest Report</h2>
          </div>
          <button className='bg-white text-black  px-4 py-2 rounded-[20px]'>Download</button>
          

          </div>
          <img className=" w-[42%] h-[70%] z-4" src={girlphoto} alt="girl sitting"/>
          

          </div>
          
   

  </div>
  </div>) }

  

  <div className=" w-[45%] sm:w-[22%] md:w-[24%] lg:w-[calc(25%-0.5rem)]  ">
    <div className="border-2  rounded-[20px] bg-white  p-3 md:p-3 flex flex-col gap-1 transition-transform transform duration-200 ease-in-out hover:scale-105 border-2 shadow-lg">
      <div className='flex flex-col gap-1'>
        <div className='bg-[#FF9EAA] w-[30px] h-[30px] rounded-full p-1.5'>
        <img className="w-[30px]" src={trending} alt='trending-logo' />
        </div>
          
          <h1 className="font-bold text-sm">Trending Coins</h1>
      </div>
      
      {statData?.coins?.slice(0, 3).map((coin) => (
        <div key={coin.symbol} className="flex flex-row lg:gap-24 md:gap-16 sm:gap-10 gap-8">
          {coin.item.symbol}
          <img className="w-[10%] " src={coin.item.small} alt={`Icon`} />
        </div>
      ))}
    </div>
  </div>



  <div className=" w-[45%] sm:w-[22%] md:w-[24%] lg:w-[calc(25%-0.5rem)] ">
    <div className="border-2  rounded-[20px] bg-white p-3 md:p-3 flex flex-col gap-1 transition-transform transform duration-200 ease-in-out hover:scale-105 border-2 shadow-lg">
      <div className='flex flex-col gap-1'>
        <div className='bg-[#FF9EAA] w-[30px] h-[30px] rounded-full p-1.5'>
        <img className="w-[30px]" src={trending} alt='trending-logo' />
        </div>
          
          <h1 className="font-bold text-sm">Trending Coins</h1>
      </div>
      
      {statData?.coins?.slice(0, 3).map((coin) => (
        <div key={coin.symbol} className="flex flex-row lg:gap-24 md:gap-16 sm:gap-10 gap-8">
          {coin.item.symbol}
          <img className="w-[10%] " src={coin.item.small} alt={`Icon`} />
        </div>
      ))}
    </div>
  </div>
{/* 
  <div className=" w-[45%] sm:w-[22%]  md:w-[24%] lg:w-[calc(25%-0.5rem)] ">
    <div className="border-2 border-b-blue-500 rounded-[20px] bg-white p-3 md:p-3 flex flex-col gap-1 transition-transform transform duration-200 ease-in-out hover:scale-105 border-2 shadow-lg">
      <div className='flex flex-col gap-1'>
        <div className='bg-[#FF9EAA] w-[30px] h-[30px] rounded-full p-1.5'>
        <img className="w-[30px]" src={trending} alt='trending-logo' />
        </div>
          
          <h1 className="font-bold text-sm">Trending Coins</h1>
      </div>
      
      {statData?.coins?.slice(0, 3).map((coin) => (
        <div key={coin.symbol} className="flex flex-row lg:gap-24 md:gap-16 sm:gap-10 gap-8">
          {coin.item.symbol}
          <img className="w-[10%] " src={coin.item.small} alt={`Icon`} />
        </div>
      ))}
    </div>
  </div>
  <div className="  w-[45%] sm:w-[22%] md:w-[24%] lg:w-[calc(25%-0.5rem)] ">
    <div className="border-2  border-b-blue-500 rounded-[20px] bg-white p-3 md:p-3 flex flex-col gap-1 transition-transform transform duration-200 ease-in-out hover:scale-105 border-2 shadow-lg">
      <div className='flex flex-col gap-1'>
        <div className='bg-[#FF9EAA] w-[30px] h-[30px] rounded-full p-1.5'>
        <img className="w-[30px]" src={trending} alt='trending-logo' />
        </div>
          
          <h1 className="font-bold text-sm">Trending Coins</h1>
      </div>
      
      {statData?.coins?.slice(0, 3).map((coin) => (
        <div key={coin.symbol} className="flex flex-row lg:gap-24 md:gap-16 sm:gap-10 gap-8">
          {coin.item.symbol}
          <img className="w-[10%] " src={coin.item.small} alt={`Icon`} />
        </div>
      ))}
    </div>
  </div> */}

{/* 3e45954e353b4a51b7a5e6b20b0554ef */}
 
  

</div>
     
  

 </div>
 </div>




  )
}

export default Statschart;
// w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4
