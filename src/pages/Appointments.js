//View Appointments
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Appointments = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = await getAccessTokenSilently();
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/appointments`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setAppointments(response.data);
      } catch (error) {
        console.error("❌ Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [getAccessTokenSilently]);

  return (
    <div>
      <h2>My Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments booked.</p>
      ) : (
        <ul>
          {appointments.map((appt) => (
            <li key={appt._id}>
              {appt.date} - Doctor ID: {appt.doctor}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Appointments;
