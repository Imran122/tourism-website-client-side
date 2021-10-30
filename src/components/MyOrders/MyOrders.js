import React from 'react';
import { Button, Table } from 'react-bootstrap';
import './MyOrders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useOrder from '../../hooks/useOrder';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';




const MyOrders = () => {
    const element = <FontAwesomeIcon icon={faTrash} />

    const { user } = useAuth();
    const [order, setOrder] = useOrder();


    function result(order) {

        if (order.email === user.email) {
            let res = {}
            res = order._id

            return res;
        }
    }
    const finalResult = order.filter(result)
    //DELETE an order from list
    const handelDeleteOrder = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/orderlist/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrder = order.filter(restOrder => restOrder._id !== id);
                        setOrder(remainingOrder)
                    }
                })
        }
    }
    return (
        <div className="table-data">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Order Status</th>
                        <th>Order Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        finalResult.map(final =>

                            <>

                                <tr>

                                    <td>1</td>
                                    <td>{final.servicename}</td>
                                    <td>{final.price}</td>
                                    {final.status === false ?
                                        <td>Pending</td>
                                        :
                                        <td>Approved</td>
                                    }


                                    <td>
                                        <Button onClick={() => handelDeleteOrder(final._id)} data-hover="Delete" className="delete-button" variant="danger">{element}</Button>



                                    </td>
                                </tr>
                            </>

                        )
                    }



                </tbody>
            </Table>
        </div >
    );
};

export default MyOrders;