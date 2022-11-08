import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='m-32' >
            <div>
                <h1>Our Services</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

            <Link to='/services'><button className='btn'>See All</button></Link>
        </div>
    );
};

export default Services;