import { lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "./utils/constant";
import axios from "axios";

const Search = lazy(() => import("./Search"));



const Header = ({id,task, updateMode, setUpdateUi}) => {
  const [tasks, setTasks]=useState([]);
  const [updateUi, setUpdateUI]= useState(false);
  let user=[];

  tasks.map((res)=> {
    user= res
  }
  
  
 )


  useEffect(()=>{
    axios.get(`${baseURL}/get`)
    .then((res)=>{
      console.log(res.data);
      setTasks(res.data)
    });
   
      },[updateUi])


  return (
    <header className="p-3 border-bottom bg-light">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-md-3 text-center">
            <Link to="/">
              
              <img alt="logo" src="../../images/logo.png" style={{width:"40px"}}/>
              

            </Link>
            <p>Clarkton Corporation</p>
          </div>
          <div className="col-md-5">
            <Search />
          </div>
          <div className="col-md-4">
            <div className="position-relative d-inline me-3">
              <Link to="/cart" className="btn btn-danger">
                <i className="bi bi-cart3"></i>
                <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                  2
                </div>
              </Link>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-secondary rounded-circle border me-3"
                data-toggle="dropdown"
                aria-expanded="false"
                aria-label="Profile"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-fill text-light"></i>
              </button>
              <p>{user.userName}</p>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/account/profile">
                    <i className="bi bi-person-square"></i> My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/star/zone">
                    <i className="bi bi-star-fill text-warning"></i> Star Zone
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/orders">
                    <i className="bi bi-list-check text-primary"></i> Orders
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/wishlist">
                    <i className="bi bi-heart-fill text-danger"></i> Wishlist
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/notification">
                    <i className="bi bi-bell-fill text-primary"></i>
                    Notification
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/support">
                    <i className="bi bi-info-circle-fill text-success"></i>
                    Support
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="bi bi-door-closed-fill text-danger"></i>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            {/* <Link to="/account/signin">Sign In</Link> |{" "}
              <Link to="/account/signup"> Sign Up</Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
