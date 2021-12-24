import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedIcon from '@mui/icons-material/Speed';
import PowerIcon from '@mui/icons-material/Power';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import React from 'react';

const BikeDetails = ({ bike }) => {
    const { name, power, mileage, transmission, registrationDate, description, color } = bike;
    return (
        <Box sx={{ boxShadow: 3, border: '1px solid #ff8000', textAlign: 'left', p: 3, pt: 0 }}>
            <h2>{name}</h2>
            <Box sx={{ flexGrow: 1, pb: 3, borderBottom: '1px solid grey' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                            <SettingsIcon sx={{ color: '#ff8000', fontSize: '30px' }} /> Mileage: {mileage} kmpl
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                            <SpeedIcon sx={{ color: '#ff8000', fontSize: '30px' }} /> Transmission: {transmission}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                            <PowerIcon sx={{ color: '#ff8000', fontSize: '30px' }} /> Power {power}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                            <DateRangeIcon sx={{ color: '#ff8000', fontSize: '30px' }} />
                            Registration-Date: {registrationDate}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                            <ColorLensIcon sx={{ color: '#ff8000', fontSize: '30px' }} />
                            Color: {color}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Typography sx={{ pt: 3 }}>{description}</Typography>
        </Box>
    );
};

export default BikeDetails;