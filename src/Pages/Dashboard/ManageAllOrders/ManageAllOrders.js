import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { setOrder } from '../../../redux/actions';
import { useSelector } from 'react-redux';

const ManageAllOrders = () => {
    // const [allOrders, setAllOrders] = useState([]);
    // useEffect(() => {
    //     fetch('https://pacific-oasis-02900.herokuapp.com/allOrders')
    //         .then(res => res.json())
    //         .then(data => setAllOrders(data))
    // }, [allOrders])

    const allOrders = useSelector((state) => state.ordersReducer.orders);

    // Updating order status
    const handleUpdatedStatus = async (_id, status, ...rest) => {

        alert('updated');
        const updatedStatus = 'shipped';
        const response = await axios
            .put(`https://pacific-oasis-02900.herokuapp.com/allOrders/${_id}`, { status: updatedStatus })
        // const url = `https://pacific-oasis-02900.herokuapp.com/allOrders/${_id}`;
        // fetch(url, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updatedUser)
        // })
    }

    // deleting order
    const handleDelete = (_id) => {
        const confirm = window.confirm('Do you want to delete?')
        if (confirm) {
            const deleteOrder = async () => {
                const response = await axios
                    .delete(`https://pacific-oasis-02900.herokuapp.com/allOrders/${_id}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            alert('deleted seccessfully');
                            const remainingOrders = allOrders.filter(order => order._id !== _id)
                            setOrder(remainingOrders);
                        }
                    })
            }

            // const url = `https://pacific-oasis-02900.herokuapp.com/allOrders/${_id}`;
            // fetch(url, {
            //     method: 'DELETE',
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.deletedCount > 0) {
            //             alert('deleted seccessfully');
            //             const remainingOrders = allOrders.filter(order => order._id !== _id)
            //             setAllOrders(remainingOrders);
            //         }
            //     })
        }
    }


    return (
        <div>
            <h2>Manage All Orders</h2>
            <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
                <Table aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#40bf40' }}>
                        <TableRow >
                            <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">User Name</TableCell>
                            <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">Order Name</TableCell>
                            <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">phone</TableCell>
                            <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">Status</TableCell>
                            <TableCell style={{ color: 'white', fontWeight: 'bold' }} variant="h5" align="center">Delete Order</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allOrders.map((row) => {
                            const { _id, status, email, bike, displayName, phone, address } = row;
                            return (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" component="th" scope="row">
                                        {row.bike.name}
                                    </TableCell>
                                    <TableCell align="center">{row.displayName}</TableCell>
                                    <TableCell align="center">{row.phone}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="contained"
                                            onClick={() => handleUpdatedStatus(_id, status, email, displayName, bike, phone, address)}
                                        >{row.status}</Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="contained"
                                            sx={{ backgroundColor: 'red' }}
                                            onClick={() => handleDelete(row._id)}
                                        >Delete Order</Button>
                                    </TableCell>
                                </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;