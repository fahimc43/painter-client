import React from 'react';
import './Sidebar.css';
import brandLogo from '../../../images/brandLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTags, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="mt-4">
      <div className="px-4" style={{ width: "200px" }}>
        <img src={brandLogo} alt="" />
      </div>
      <div className="mt-5 px-4" style={{ height: "80vh", color: "white" }}>
        <ul className="list-unstyled">
          <li className="mb-3">
            <Link style={{ textDecoration: "none", color: "#F6F2EB" }} to="/dashboard/book">
              <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
            </Link>
          </li>
          <li className="mb-3">
            <Link style={{ textDecoration: "none", color: "#F6F2EB" }} to="/dashboard/bookingList">
              <FontAwesomeIcon icon={faTags} /> <span>Booking List</span>
            </Link>
          </li>
          <li className="mb-3">
            <Link style={{ textDecoration: "none", color: "#F6F2EB" }} to="/dashboard/review">
            <i class="fas fa-envelope-open-text"></i>
              <FontAwesomeIcon icon={faEnvelopeOpenText} /> <span>Review</span>
            </Link>
          </li>
          <li className="mb-3">
            <Link style={{ textDecoration: "none", color: "#F6F2EB" }} to="/admin/addService">
            <i class="fas fa-plus-square"></i>
              <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;