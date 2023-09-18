import Sidebar from './components/Sidebar';
import './App.css';
import Dashboard from './components/Dashboard';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className=" lg:w-full overflow-hidden">
      <Navbar />
    <div className=" py-[30px] h-[1144px]">
    <div className="flex lg:gap-[60px] gap-[10px]  py-[30px] lg:px-[30px]">
      <div className=' lg:w-[280px] w-[0px]'>
      <Sidebar />
      </div>
      <div className='lg:basis-[82%]  lg:py-[30px] '>
        <Dashboard />
        <div className='pt-[50px]'>
        <div className=' bg-[white] lg:px-[40px] px-[20px] py-[15px] h-[380px] lg:w-full w-[355px] md:w-[65%] shadow-lg border-2 rounded-[20px]  '>
          <div>
            <h1 className='font-bold text-black text-lg'>Activities</h1>
            <p className='text-zinc-500 text-sm font-normal'>May-June 2022</p>
          </div>
            <BarChart />
        </div>
        </div>
        <div className='flex flex-col  md:flex-row md:gap-[250px] '>
          <div className='w-[290px] lg:w-[full] '>
          <DoughnutChart />
          </div>
        <Login /> 
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;



//dev-utg0b7maopy1vveb.us.auth0.com
//oNSd10HJFUENO2ZlfXCFxymeTO4Sg5Kk
//CdgtcSwjemT5WXlU4Gq7NLtqUWi6veN_Hb5TAFHAUP9s6tW3MZWW9DVAdxmWwMoZ
