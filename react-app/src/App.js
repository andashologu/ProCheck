import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Signup from './Components/signup';
import Login from './Components/login';
import Home from './Components/home';




function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />

    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
