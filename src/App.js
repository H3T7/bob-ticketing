import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Component/HomePage/HomePage';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import EventDetail from './Component/EventDetail/EventDetail';
import CreateEvent from './Component/CreateEvent/CreateEvent';
import AllEvents from './Component/AllEvents/AllEvents';
import Profile from './Component/Profile/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/eventdetail" element={<EventDetail />} />
          <Route path="/createevent" element={<CreateEvent />} />
          <Route path="/all/events" element={<AllEvents />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
