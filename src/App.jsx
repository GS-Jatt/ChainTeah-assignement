
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Login from './page/Login';
import Signup from './page/signup';

function App() {
 

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App
