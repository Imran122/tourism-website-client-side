import { useState, useEffect } from 'react';


const useOrder = () => {
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orderlist')
            .then(response => response.json())
            .then(data => setOrder(data))
    }, [])

    return [order, setOrder]
}
export default useOrder;