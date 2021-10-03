import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useStyles } from './styles';

import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';

export default function HomeItem({ home }) {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 445 }} className={classes.root}>
      <CssBaseline />
      <CardMedia
        component='img'
        height='194'
        image={
          home.img
            ? home.img
            : 'https://ssl.cdn-redfin.com/photo/9/bcsphoto/207/genBcs.421600207_0.jpg'
        }
        alt='Paella dish'
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant='h5'>${home.price}</Typography>

          <Typography className={classes.m1}>
            {`${home.beds} Beds ${home.baths} Baths  ${home.squareFeet} Sq.Ft `}
          </Typography>

          <Typography>
            {`${home.address} ${home.city}, ${home.state} ${home.postalCode}`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
