import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import BookingCard from '../BookingCard/BookingCard';
import Sidebar from '../Sidebar/Sidebar';

// const containerStyle = {
//     backgroundColor: "#F4FDFB",
//     height: "100%"
// }

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://fast-earth-12877.herokuapp.com/bookingList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [loggedInUser.email])

    return (
        <div>
            <div className="container row">
                <div className="col-md-3" style={{backgroundColor: "#4C4B7D"}}>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5">
                    <h2 className="p-2" style={{backgroundColor: "#4C4B7D", color: "white"}}>Booking List</h2>
                    {
                        bookings.map(booking => <BookingCard booking={booking}></BookingCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingList;