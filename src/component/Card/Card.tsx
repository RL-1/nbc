import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../../assets/images/gf2080.jpg'

export interface CardCustomType {
    name: string
    info: string
    image: string
}
export const CardCustom: React.FC<CardCustomType> = (props:CardCustomType) => {
  const { name, info, image } = props
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}