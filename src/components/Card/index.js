import * as React from 'react';
import './index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ title, picture }) {
  return (
    <Card className="seeMore" sx={{ maxWidth: 345, margin: '0.75rem' }}>
      <CardActionArea>
        <CardContent>
          <Typography
            className="cardTitle"
            gutterBottom
            variant="h3"
            component="div"
          >
            {title}
          </Typography>

          <CardMedia component="img" height="140" image={picture} alt="" />
        </CardContent>
      </CardActionArea>
      See More
    </Card>
  );
}
