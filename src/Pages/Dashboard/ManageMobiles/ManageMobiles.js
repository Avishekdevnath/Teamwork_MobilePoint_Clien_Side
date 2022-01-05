import React from 'react';
import { Button, Container, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { setmobiles } from '../../../redux/actions';
import axios from 'axios';

const ManageMobiles = () => {
    const mobiles = useSelector((state) => state.mobilesReducer.mobiles);

    // deleting order
    const handleDelete = (_id) => {
        const confirm = window.confirm('Do you want to delete?')

        if (confirm) {
            axios.delete(`https://mobilepointserver.herokuapp.com/mobiles/${_id}`)
                .then(data => {
                    const deletedCount = data.data.deletedCount
                    if (deletedCount > 0) {
                        alert('deleted seccessfully');
                        const remainingOrders = mobiles.filter(order => order._id !== _id)
                        setmobiles(remainingOrders);
                    }
                })

        }
    }
    return (
        <Container>
            <h2>Manage all mobiles here</h2>
            <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 3 }}>
                <TableContainer sx={{ maxHeight: 500 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>mobile Picture</Typography> </TableCell>
                                <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>mobile Name</Typography> </TableCell>
                                <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Ratings</Typography> </TableCell>
                                <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Delete mobile</Typography> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {mobiles.map((row) => {
                                const { _id, picture, name, rating } = row;
                                return (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">
                                            <img src={picture} style={{ width: '200px' }} alt="" />
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{name}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Rating name="read-only" value={rating} readOnly />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                variant="contained"
                                                sx={{ background: 'red' }}
                                                onClick={() => handleDelete(_id)}
                                            >Delete mobile</Button>
                                        </TableCell>
                                    </TableRow>)
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
};

export default ManageMobiles;