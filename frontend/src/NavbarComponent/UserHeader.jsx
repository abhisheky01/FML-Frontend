import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserHeader = () => {
  let navigate = useNavigate();

  const userLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-user");
    
    navigate("/home");
    window.location.reload(true);
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">

      <li className="nav-item">
        <Link to="/user/appointment/chatbot" className="nav-link active" aria-current="page">
          <b className="">ChatBot</b>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/user/appointment/take" className="nav-link active" aria-current="page">
          <b className="">Take Appointment</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/appointments/" className="nav-link active" aria-current="page">
          <b className="">My Appointments</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={userLogout}
        >
          <b className="btn btn-danger">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default UserHeader;
