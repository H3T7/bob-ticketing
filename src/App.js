import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Component/HomePage/HomePage';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
