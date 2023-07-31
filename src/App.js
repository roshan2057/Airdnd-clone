import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login';
import Vacation from './components/pages/Market_Research/Vacation';
import Pricing from './components/pages/Dynamic_Pricing/Pricing_tool';
import Investing from './components/pages/Real_Estate_investing/Investing';
import Properties from './components/pages/Performance_Benchmarking/Properties';
import RentalManagers from './components/pages/Property_Managers/RentalManagers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* solution / MarketMinder */}
        <Route path='/vacation-rental-data' element={<Vacation/>}/>
        <Route path='/ironrim-pricing-tool' element={<Pricing/>}/>
        <Route path='/best-place-to-invest' element={<Investing/>}/>
        <Route path='/my-properties' element={<Properties/>}/>

        {/* solution / EnterpriseSolution */}
        <Route path='/vacation-rental-managers' element={<RentalManagers/>}/>

        

      </Routes>

     <Footer/>
    </div>
  );
}

export default App;
