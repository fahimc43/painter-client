import React from 'react';
const TestimonialDetail = (props) => {
    const {name, designation, brief} = props.review;
    return (
        <div class="card shadow m-3" style={{width: "18rem"}}>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{designation}</h6>
                <p class="card-text">{brief}</p>
            </div>
        </div>
    );
};

export default TestimonialDetail;