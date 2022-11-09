import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const location = useLocation();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='m-32' >
            <div>
                <h1 className='text-center text-3xl font-extrabold text-white'>Our Services</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                {
                    location.pathname === '/' ?
                        (
                            services.slice(0, 3).map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        )
                        :
                        (
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        )
                }
            </div>
            {
                location.pathname === '/' ?
                    (
                        <Link to='/services'><button className='btn btn-block mx-auto'>See All</button></Link>
                    )
                    :
                    (
                        <></>
                    )
            }

        </div>
    );
};

export default Services;