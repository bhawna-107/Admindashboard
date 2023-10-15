import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import notification from '../assets/bellicon.png';
import searchicon from '../assets/Search icon.png';
import trending from '../assets/trending.png';
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

      <div className='my-5 '> 
        <div className='flex flex-row justify-between gap-4 mb-4'>
          <div>
            <h1 className='font-bold text-2xl'>DashBoard</h1>
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


 
<div className="flex flex-wrap justify-between gap-4 "> 
  

  <div className="md:w-[calc(33.333% - 1rem)] lg:w-[calc(25% - 1rem)] ">
    <div className="border-2 rounded-[20px] bg-white p-3 md:p-3 flex flex-col gap-1">
      <div className='flex flex-col gap-1'>
        <div className='bg-green-300 w-[30px] h-[30px] rounded-full p-1.5'>
        <img className="w-[30px]" src={trending} alt='trending-logo' />
        </div>
          
          <h1 className="font-bold text-sm">Trending Coins</h1>
      </div>
      
      {statData?.coins?.slice(0, 3).map((coin) => (
        <div key={coin.symbol} className="flex flex-row lg:gap-20 md:gap-16 sm:gap-10 gap-8">
          {coin.item.symbol}
          <img className="w-[10%] " src={coin.item.small} alt={`Icon`} />
        </div>
      ))}
    </div>
  </div>



  <div className=" md:w-[calc(33.333% - 1rem)] lg:w-[calc(25% - 1rem)] ">
    <div className="border-2 rounded-[20px] bg-white p-3 md:p-3 flex flex-col gap-1">
      <div className='flex flex-col gap-1'>
        <div className='bg-green-300 w-[30px] h-[30px] rounded-full p-1.5'>
        <img className="w-[30px]" src={trending} alt='trending-logo' />
        </div>
          
          <h1 className="font-bold text-sm">Trending Coins</h1>
      </div>
      
      {statData?.coins?.slice(0, 3).map((coin) => (
        <div key={coin.symbol} className="flex flex-row lg:gap-20 md:gap-16 sm:gap-10 gap-8">
          {coin.item.symbol}
          <img className="w-[10%] " src={coin.item.small} alt={`Icon`} />
        </div>
      ))}
    </div>
  </div>

  <div className=" md:w-[calc(33.333% - 1rem)] lg:w-[calc(25% - 1rem)] ">
    <div className="border-2 rounded-[20px] bg-white p-3 md:p-3 flex flex-col gap-1">
      <div className='flex flex-col gap-1'>
        <div className='bg-green-300 w-[30px] h-[30px] rounded-full p-1.5'>
        <img className="w-[30px]" src={trending} alt='trending-logo' />
        </div>
          
          <h1 className="font-bold text-sm">Trending Coins</h1>
      </div>
      
      {statData?.coins?.slice(0, 3).map((coin) => (
        <div key={coin.symbol} className="flex flex-row lg:gap-20 md:gap-16 sm:gap-10 gap-8">
          {coin.item.symbol}
          <img className="w-[10%] " src={coin.item.small} alt={`Icon`} />
        </div>
      ))}
    </div>
  </div>
  <div className=" md:w-[calc(33.333% - 1rem)] lg:w-[calc(25% - 1rem)] ">
    <div className="border-2 rounded-[20px] bg-white p-3 md:p-3 flex flex-col gap-1">
      <div className='flex flex-col gap-1'>
        <div className='bg-green-300 w-[30px] h-[30px] rounded-full p-1.5'>
        <img className="w-[30px]" src={trending} alt='trending-logo' />
        </div>
          
          <h1 className="font-bold text-sm">Trending Coins</h1>
      </div>
      
      {statData?.coins?.slice(0, 3).map((coin) => (
        <div key={coin.symbol} className="flex flex-row lg:gap-20 md:gap-16 sm:gap-10 gap-8">
          {coin.item.symbol}
          <img className="w-[10%] " src={coin.item.small} alt={`Icon`} />
        </div>
      ))}
    </div>
  </div>

  

</div>
     
  

 </div>
 </div>




  )
}

export default Statschart;
// w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4
