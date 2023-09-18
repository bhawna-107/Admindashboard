import Sidebar from './components/Sidebar';
import './App.css';
import Dashboard from './components/Dashboard';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
    <div className=" py-[30px] h-[100%]">
    <div className="flex gap-[60px]  py-[30px] h-[944px] ">
      <div className=' w-[280px]'>
      <Sidebar />
      </div>
      <div className='lg:basis-[82%] basis-[100%] py-[30px]'>
        <Dashboard />
        <div className='pt-[50px]'>
        <div className=' bg-[white] px-[40px] py-[15px] h-[380px] lg:w-[975px] w-[470px] md:w-[975px] shadow-lg border-2 rounded-[20px]  '>
          <div>
            <h1 className='font-bold text-black text-lg'>Activities</h1>
            <p className='text-zinc-500 text-sm font-normal'>May-June 2022</p>
          </div>
            <BarChart />
        </div>
        </div>
        <div className='flex flex-col sm:flex-row sm:gap-[250px] md:gap-[250px] '>
          <div className='w-[260px]'>
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
