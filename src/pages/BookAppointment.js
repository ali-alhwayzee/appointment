//Book an Appointment
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const BookAppointment = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");

  const bookAppointment = async () => {
    const token = await getAccessTokenSilently();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/appointments`,
        { doctor: doctorId, date },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("✅ Appointment booked successfully!");
    } catch (error) {
      console.error("❌ Error booking appointment:", error);
      alert("❌ Failed to book appointment");
    }
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <input type="text" placeholder="Doctor ID" onChange={(e) => setDoctorId(e.target.value)} />
      <input type="datetime-local" onChange={(e) => setDate(e.target.value)} />
      <button onClick={bookAppointment}>Book Now</button>
    </div>
  );
};

export default BookAppointment;
