import React from 'react';
import headerPhoto from '../../../images/headerPhoto.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main>
            <div className="row d-flex align-items-center headerMain">
                <div className="col-md-5 offset-md-1">
                    <h1>Professional <br/> Painting Services</h1>
                    <p><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloremque, iure eveniet officia tenetur facilis.</small> </p>
                    <button className="btn btn-danger">Get Started</button>
                </div>
                <div className="col-md-6">
                    <img src={headerPhoto} alt="" className="img-fluid"/>
                </div>
            </div>

        </main>
    );
};

export default HeaderMain;