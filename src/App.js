import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>

     <Footer/>
    </div>
  );
}

export default App;
