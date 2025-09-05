import { AddShoppingCartOutlined } from "@mui/icons-material";
import { CardActionArea } from "@mui/material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

 const ProductCard = ({ product, handleAddToCart }) => {
  
  return (
<Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
    <CardMedia component="img"  alt={product.name} src={product.image}/>
      {/* <CardMedia
        sx={{ height: 140 }}
        // image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqlZsHkBRjdzasJz7tgkjZDn2YmE9iawOBQ&s"
        // title="green iguana"
        //image={product.image}
        //title={product.name}
      /> */}
      <CardContent>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {product.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ${product.cost}
        </Typography>
        <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={product.rating} precision={0.5} readOnly />
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          className="card-button"
          fullWidth
          variant="contained"
          startIcon={<AddShoppingCartOutlined />}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>    
      </Card>
    // <Card className="card">
    // </Card>
  );
};

export default ProductCard;
