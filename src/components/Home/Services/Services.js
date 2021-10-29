import React from 'react';
import './Services.css'
import useService from '../../../hooks/useService';
import Service from '../Service/Service';
const Services = () => {
    const [services, setServices] = useService()
    //const servicesItems = services.slice(0, 6)
    return (
        <div>




            <div class="container mb-5 mt-3">

                <div class="sec-title text-start">
                    <h2><span className="service-title">PLAN</span> YOUR NEXT STAY</h2>
                    <div class="text mb-45">
                        <h4>Experience the Great Outdoors</h4>

                    </div>
                </div>
                {/* card data design */}



                <div class="row row-cols-1 row-cols-md-3 g-4">

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