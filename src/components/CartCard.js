import "./CartCard.css";
import { useCart } from "../context/CartContext";
import { useState } from "react";
export const CartCard = ({ product }) => {

  const [value, setValue] = useState(1)
  const { name, price, image } = product;
  const { removeItem, updateQuantity } = useCart()
  const handleChangeQuan = (e) => {
    setValue(e.target.value);
    updateQuantity(Number(e.target.value), product)
  }
  const handleRemoveClick = () => {
    removeItem(product)
  }

  return (
    <div className="cartCard">
      <div className="relative">
        <img src={image} alt={name} />
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">
          {product.quantity}
        </span>
      </div>
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <div className="flex items-center mt-2">
        <span className="mr-2">Quantity:</span>
        <input
          type="number"
          min={1}
          max={1000}
          className="w-16 px-2 py-1 border rounded"
          onChange={handleChangeQuan}
          value={value}
        />
      </div>
      <button onClick={handleRemoveClick} className="mt-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
        Remove
      </button>

    </div>
  )
}
