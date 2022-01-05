import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

const MobileDetailsCart = (props) => {
    const { price, picture, name } = props.mobile;
    const { user } = useAuth();
    const mobileData = { picture, name };
    const initialInfo = { displayName: user.displayName, email: user.email, status: 'pending' }
    const [order, setOrder] = useState(initialInfo);

    // snack bar
    const [open, setOpen] = React.useState(false);
    const [confirm, setConfirm] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    ///////////////

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = { ...order };
        newOrderData["mobile"] = mobileData;
        newOrderData[field] = value;
        setOrder(newOrderData);
        // e.reset();
    }


    const handleCartSubmit = (e) => {
        axios.post('https://mobilepointserver.herokuapp.com/allOrders', order)
            .then(data => {
                const id = data.data.insertedId;
                if (id) {
                    setConfirm(true);
                    setOrder(null);
                }
            })
            .catch((err) => console.error("Error: ", err))
        e.preventDefault();
    }


    return (
        <Box sx={{ border: '1px solid #ff8000', p: 2 }}>
            <Typography sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center' }} variant="h5">Price: <Box sx={{ color: 'Red' }}> ৳ {price}</Box></Typography>
            <Typography sx={{ fontWeight: 'bold', mt: 3 }} variant="h4">{user.displayName}</Typography>
            <Typography sx={{ fontWeight: 'bold' }} variant="h6">{user.email}</Typography>
            <form style={{ marginTop: "15px" }} onSubmit={handleCartSubmit}>
                <TextField
                    sx={{ width: '100%', mt: 1 }}
                    required
                    name="address"
                    label="Your Address"
                    variant="outlined"
                    onBlur={handleOnBlur} />
                <TextField
                    sx={{ width: '100%', mt: 1 }}
                    required
                    name="phone"
                    label="Your Phone Number"
                    type="number"
                    variant="outlined"
                    onBlur={handleOnBlur} />
                <Button
                    sx={{ width: '100%', mt: 1, backgroundColor: '#ff8000' }}
                    type="submit"
                    variant="contained"
                    onClick={handleClick}>
                    Place Order</Button>
            </form>
            {confirm && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Order placed successfully
                </Alert>
            </Snackbar>}
        </Box >
    );
};

export default MobileDetailsCart;