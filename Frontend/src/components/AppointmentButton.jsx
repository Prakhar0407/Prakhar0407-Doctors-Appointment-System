import { Link } from "react-router-dom";

const AppointmentButton = () => {
  return (
    <Link to="/appointment">
      <button className="appointButton">
        Book your Appointment Now
      </button>
    </Link>
  );
};

export default AppointmentButton;