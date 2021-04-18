import React from 'react';

const BookingCard = (props) => {
    const {title, price, brief, imageUrl} = props.booking;
    return (
        <div>
            <div class="card mb-3" style={{ maxWidth: "250"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={imageUrl} alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text"> <small>{brief}</small></p>
                            <h5 className="text-danger">${price}</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;