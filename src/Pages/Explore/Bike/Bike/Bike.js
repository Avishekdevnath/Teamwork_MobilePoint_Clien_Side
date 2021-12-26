import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import BikeDetails from '../BikeDetails/BikeDetails';
import BikeDetailsCart from '../BikeDetailsCart/BikeDetailsCart';

const Bike = () => {
    const { bikeID } = useParams();

    const bikes = useSelector((state) => state.bikesReducer.bikes);

    const bike = bikes.filter(bike => bike._id === bikeID);

    return (
        <>
            <Header></Header>
            <Box
                className="banner"
                sx={{
                    height: '85vh',
                    background: `url("${bike[0].picture}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%'
                }}></Box>
            <Container sx={{ flexGrow: 1, mx: 'auto', mt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <BikeDetails bike={bike[0]}></BikeDetails>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BikeDetailsCart bike={bike[0]}></BikeDetailsCart>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Bike;