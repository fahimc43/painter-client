import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import { UserContext } from '../../../App';


const Book = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { serviceId } = useParams()
    const [service, setService] = useState([]);
    const { title, price, brief, imageUrl } = service;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        const url = `https://fast-earth-12877.herokuapp.com/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, [serviceId])

    const onSubmit = data => {
        const newCheckout = { ...loggedInUser, title, price, brief, imageUrl, orderTime: new Date() }
        fetch('https://fast-earth-12877.herokuapp.com/addBooking', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCheckout)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order placed successfully');
                }
            })
    };
    return (
        <div>
            <div className="container row">
                <div className="col-md-3" style={{ backgroundColor: "#4C4B7D" }}>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5">
                    <h2 className="p-2" style={{ backgroundColor: "#4C4B7D", color: "white" }}>Book {title}</h2>
                    <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row container-fluid">
                            <div className="col-md-6  pt-3">
                                <div className="form-group mb-3">
                                    <label className="form-label">Your name</label>
                                    <input type="text" {...register("name", { required: true })} name="name" defaultValue={loggedInUser.name} className="form-control" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Your email address</label>
                                    <input type="text" {...register("email", { required: true })} name="email" defaultValue={loggedInUser.email} className="form-control" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Service category</label>
                                    <input type="text" {...register("service", { required: true })} name="service" defaultValue={title} className="form-control text-success" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Pay with credit card</label>
                                    <ProcessPayment></ProcessPayment>
                                </div>
                                <p className="text-success">Your Service price will be ${price}</p>
                                <button type="submit" class="btn btn-danger">Pay Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Book;