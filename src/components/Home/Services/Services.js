import React from 'react';
import './Services.css'
import useService from '../../../hooks/useService';
import Service from '../Service/Service';
const Services = () => {
    const [services, setServices] = useService()
    //const servicesItems = services.slice(0, 6)
    return (
        <div>




            <div className="container mb-5 mt-3">

                <div className="sec-title text-start">
                    <h2><span className="service-title">BEST</span> TRAVEL SPOTS</h2>
                    <div className="text mb-45">
                        <h4>Make Experience With Us</h4>

                    </div>
                </div>
                {/* card data design */}



                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >

                        </Service>)
                    }


                </div>
            </div>
        </div>
    );
};

export default Services;