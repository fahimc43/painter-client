import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";


const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            designation: data.designation,
            brief: data.brief
        };
        const url = 'https://fast-earth-12877.herokuapp.com/addReview';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Review post successfully');
                }
            })

    };
    return (
        <div>
            <div className="container row">
                <div className="col-md-3" style={{backgroundColor: "#4C4B7D"}}>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5">
                    <h2 className="p-2" style={{backgroundColor: "#4C4B7D", color: "white"}}>Review</h2>
                    <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <label className="form-label">Your Name</label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter your name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Your Designation</label>
                            <input type="text" {...register("designation", { required: true })} name="designation" placeholder="Enter your designation" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Description</label>
                            <input type="text" {...register("brief", { required: true })} name="brief" placeholder="Enter Description" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;