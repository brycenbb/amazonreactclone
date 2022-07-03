import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ title, picture }) {
  return (
    <Card sx={{ maxWidth: 345, margin: '0.5rem' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          <CardMedia component="img" height="140" image={picture} alt="" />
        </CardContent>
      </CardActionArea>
      See More
    </Card>
  );
}
