import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

const TopBikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('https://pacific-oasis-02900.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return (
        <>
            <h1>Our Best Bikes</h1>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        bikes.slice(0, 6).map(bike => {
                            const { _id, name, picture, shortDescription, rating, price, mileage } = bike;
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
                                                    <PaymentIcon sx={{ color: '#ff8000' }} /> Price: $ {price}
                                                </Typography>
                                                <Typography sx={{ display: 'flex', alignItems: 'center' }} variant="h6">
                                                    <StarIcon sx={{ color: '#ff8000' }} /> Ratings: {rating}
                                                </Typography>
                                                <Typography sx={{ display: 'flex', alignItems: 'center' }} variant="h6">
                                                    <LocalGasStationIcon sx={{ color: '#ff8000' }} /> mileage: {mileage} kmpl
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                        <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <NavLink to={`/bikeDetails/${_id}`} style={{ textDecoration: 'none' }}>
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
        </>
    );
};

export default TopBikes;