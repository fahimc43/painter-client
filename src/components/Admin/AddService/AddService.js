import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const onSubmit = data => {
        const serviceData = {
            title: data.title,
            price: data.price,
            brief: data.brief,
            imageUrl: imageUrl
        };
        const url = `https://fast-earth-12877.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Service add successfully');
                }
            })

    };

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '3a4fbb9d5dadec4ae4a140dbe3c1ef33');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div>
            <div className="container row">
                <div className="col-md-3" style={{ backgroundColor: "#4C4B7D" }}>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5">
                    <h2 className="p-2" style={{ backgroundColor: "#4C4B7D", color: "white" }}>Add service</h2>

                    <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <label className="form-label">Service Title</label>
                            <input type="text" {...register("title", { required: true })} name="title" placeholder="Enter title" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Service price</label>
                            <input type="text" {...register("price", { required: true })} name="price" placeholder="Enter price" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Service Description</label>
                            <input type="text" {...register("brief", { required: true })} name="brief" placeholder="Enter Description" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Upload Image</label>
                            <input onChange={handleImageUpload} type="file" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;