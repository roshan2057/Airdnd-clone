import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import Vacation from './components/pages/Market_Research/Vacation';
import Pricing from './components/pages/Dynamic_Pricing/Pricing_tool';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* solution  */}
        <Route path='/vacation-rental-data' element={<Vacation/>}/>
        <Route path='/ironrim-pricing-tool' element={<Pricing/>}/>
      </Routes>

     <Footer/>
    </div>
  );
}

export default App;
