import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { name, price, image, id } = product;
  const { addItem, cartList, removeItem } = useCart()

  const [inCart, setInCart] = useState(false)
  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === id);

    if (productIsInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }

  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {(inCart) ? <button className="remove" onClick={() => removeItem(product)}>Remove</button> : <button onClick={() => addItem(product)} >Add To Cart</button>}
      </div>
    </div>
  )
}
