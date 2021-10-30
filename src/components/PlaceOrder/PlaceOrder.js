import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const [service, setService] = useState({})
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(response => response.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>place order {id}</h2>
            <h2>details of {service.name}</h2>
        </div>
    );
};

export default PlaceOrder;