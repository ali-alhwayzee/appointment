import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";
import Auth from "./components/Auth";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a> | <a href="/book">Book Appointment</a> | <a href="/appointments">My Appointments</a>
        </nav>
        <Auth />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
