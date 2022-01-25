import React from 'react';
import { Button, Table } from 'react-bootstrap';
import './ManageOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useOrder from '../../hooks/useOrder';
import useAuth from '../../hooks/useAuth';


const ManageOrders = () => {
    const element = <FontAwesomeIcon icon={faTrash} />


    const [order, setOrder] = useOrder();

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
    //confirmation status change method
    const handelApproveOrder = id => {

        const url = `http://localhost:5000/orderlist/${id}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
        })
            .then(response => response.json())
            .then(data => {
                let updateOrder = [...order]
                console.log(updateOrder)
                for (let i = 0; i < updateOrder.length; i++) {
                    if (updateOrder[i]._id === id) {
                        updateOrder[i].status = true;
                    }

                }
                setOrder(updateOrder)
            })
    }
    return (
        <div className="table-data">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Buyer Name</th>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Order Status</th>
                        <th>Order Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map(final =>

                            <>

                                <tr>

                                    <td>1</td>
                                    <td>{final.name}</td>
                                    <td>{final.servicename}</td>
                                    <td>{final.price}</td>
                                    {final.status === false ?
                                        <>
                                            <td>
                                                Pending
                                                <Button onClick={() => handelApproveOrder(final._id)} className="confirm-button">Approve</Button>
                                            </td>


                                        </>


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
        </div>
    );
};

export default ManageOrders;