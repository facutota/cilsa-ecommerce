import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import useCartStore from '../../store/UseCartStore'; // Asegúrate de que la ruta sea correcta
import { Button } from '@mui/material';

const CardBuy = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart); // Obtén la función addToCart

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={product.name} />
      <CardMedia component="img" height="194" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Descripción del producto aquí.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Precio: ${product.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button variant="contained" onClick={() => addToCart(product)}>
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardBuy;