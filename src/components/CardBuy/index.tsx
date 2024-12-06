import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

interface CardBuyProps {
  name: string;
  image: string;
}

export default function CardBuy({ name, image }: CardBuyProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader    
        title={name}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Descripción del producto aquí.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
          Comprar
        </button>
      </CardActions>
    </Card>
  );
}