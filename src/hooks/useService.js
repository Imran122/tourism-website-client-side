import { useEffect, useState } from 'react';

const useService = () => {
    //set data in services
    const [services, setServices] = useState([])
    //fetch data from fajedb json file
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return [services, setServices]
}

export default useService;