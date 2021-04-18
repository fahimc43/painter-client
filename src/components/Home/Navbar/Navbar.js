import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import brandLogo from '../../../images/brandLogo.png'

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/"> <img src={brandLogo} alt="" style={{ width: "150px" }} /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link ms-5" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link ms-5" to="/">About</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link ms-5" to="/">Services</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link ms-5" to="/">Project</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link ms-5" to="/">Reviews</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link ms-5" to="/admin/addService">Admin</Link>
            </li>
            <li class="nav-item">
              {
                loggedInUser.name ? <Link className="nav-link ms-5 text-danger" to="/login">{loggedInUser.name}</Link>
                  : <Link className="nav-link ms-5" to="/login">Login</Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;