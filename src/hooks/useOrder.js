import { useState, useEffect } from 'react';


const useOrder = () => {
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('https://wicked-castle-46477.herokuapp.com/orderlist')
            .then(response => response.json())
            .then(data => setOrder(data))
    }, [])

    return [order, setOrder]
}
export default useOrder;