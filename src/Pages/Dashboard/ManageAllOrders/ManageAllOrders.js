import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { setOrders } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const ManageAllOrders = () => {

    const orders = useSelector((state) => state.ordersReducer.orders);
    const dispatch = useDispatch();
    // Updating order status
    const handleUpdatedStatus = (_id, status, ...rest) => {

        alert('updated');
        const updatedStatus = 'shipped';
        axios.put(`https://mobilepointserver.herokuapp.com/allOrders/${_id}`, { status: updatedStatus })

    }

    // deleting order
    const handleDelete = (_id) => {
        const confirm = window.confirm('Do you want to delete?')
        if (confirm) {
            axios.delete(`https://mobilepointserver.herokuapp.com/allOrders/${_id}`)
                .then(data => {
                    const deletedCount = data.data.deletedCount;
                    if (deletedCount > 0) {
                        alert('deleted seccessfully');
                        const remainingOrders = orders.filter(order => order._id !== _id)
                        dispatch(setOrders(remainingOrders));
                    }
                })

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
                        {orders.map((row) => {
                            const { _id, status, email, mobile, displayName, phone, address } = row;
                            return (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center" component="th" scope="row">
                                        {row.displayName}
                                    </TableCell>
                                    <TableCell align="center">{row.mobile.name}</TableCell>
                                    <TableCell align="center">{row.phone}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="contained"
                                            onClick={() => handleUpdatedStatus(_id, status, email, displayName, mobile, phone, address)}
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