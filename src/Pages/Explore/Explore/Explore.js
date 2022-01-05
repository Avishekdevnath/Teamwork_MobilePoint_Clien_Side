import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { NavLink } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { useSelector } from 'react-redux';

const Explore = () => {
    const mobiles = useSelector((state) => state.mobilesReducer.mobiles);

    return (
        <>
            <Header></Header>
            <h1>Explore our beautiful mobiles</h1>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        mobiles.map(mobile => {
                            const { _id, name, picture, shortDescription, rating, price, mileage } = mobile;
                            return (
                                <Grid key={_id} item xs={12} md={4}>
                                    <Card sx={{ maxWidth: 345, mx: 'auto', height: '100%', boxShadow: 3 }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={picture}
                                            alt={name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }} component="div">
                                                {name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {shortDescription}
                                            </Typography>
                                            <Box sx={{
                                                display: 'flex', justifyContent: 'flex-start',
                                                alignItems: 'flex-start',
                                                flexDirection: 'column', mt: 2,
                                                mr: 3
                                            }}>

                                                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <PaymentIcon sx={{ color: '#ff8000' }} /> Price: ৳ {price}
                                                </Typography>
                                                <Typography sx={{ display: 'flex', alignItems: 'center' }} variant="h6">
                                                    <StarIcon sx={{ color: '#ff8000' }} /> Ratings: {rating}
                                                </Typography>
                                                {/* <Typography sx={{ display: 'flex', alignItems: 'center' }} variant="h6">
                                                    <LocalGasStationIcon sx={{ color: '#ff8000' }} /> mileage: {mileage} kmpl
                                                </Typography> */}
                                            </Box>
                                        </CardContent>
                                        <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <NavLink to={`/mobileDetails/${_id}`} style={{ textDecoration: 'none' }}>
                                                <Button sx={{ px: 4, mb: 2, backgroundColor: '#ff8000' }} variant="contained">Buy Now</Button>
                                            </NavLink>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Explore;