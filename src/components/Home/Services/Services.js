import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';


const Services = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [Services, setServices] = useState([])

    useEffect(() => {
        fetch('https://fast-earth-12877.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setServices(data)
            })
    }, [])



    return (
        <section className="services mt-5 pt-5">
            <div className="text-center">
                <h5 style={{ color: "#BB2D3B" }}>Our Services</h5>
                <h2 style={{ color: "#4C4B7D", fontWeight: "700" }}>Let's Choose Available Services</h2>
            </div>
            <div className="container">
                {isLoading &&
                    <div className="d-flex justify-content-center pt-3">
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                }
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        Services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;