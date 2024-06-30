import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Home from './homepage';
import Login from './Login';
import Resetpassword from './Resetpassword';
import Dashboard from './Dashboard';
import Services from './Services';
import LockScreen from './lockscreen';
import OtpPage from './OtpPage';
import PlaceSearch from './placesearch';
import Adminpage from './apirequests/Adminpage';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lockscreen" element={<LockScreen />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/otppage" element={<OtpPage/>}/>
          <Route path="/placesearch" element={<PlaceSearch/>}/>
          <Route path="/adminpage" element={<Adminpage/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;