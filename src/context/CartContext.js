import { createContext, useContext, useReducer, useEffect } from "react";
import { CartReducer } from "../reducer/CartReducer";
const cashCartList = (cartList)=>{
  localStorage.setItem("cartList", JSON.stringify(cartList));
}
const intialState = {
  total: 0,
  cartList: []
}
const cartContext = createContext(intialState)
export const CartProvider = ({ children }) => {
  useEffect(() => {
    const cachedCartList = localStorage.getItem("cartList");
    if (cachedCartList) {
      dispatch({
        type: "Load_Cached_Cart",
        payload: JSON.parse(cachedCartList)
      });
      updateTotal(JSON.parse(cachedCartList));
    }
  }, []);

  
  const [state, dispatch] = useReducer(CartReducer, intialState)
  const updateTotal = (list) => {
    let Total = 0;
    list.forEach((item) => {
      return Total += (item.price * item.quantity)
    })
    dispatch({
      type: "Total_Update",
      payload: Total
    })
  }

  const addItem = (item) => {
    dispatch({
      type: "Add_To_Cart",
      payload: state.cartList.concat(item)
    })
    updateTotal(state.cartList.concat(item))
    cashCartList(state.cartList.concat(item))
  }
  const removeItem = (product) => {
    const updateCart = state.cartList.filter((item) => {
      return item.id !== product.id
    })
    dispatch({
      type: "Remove_From_Cart",
      payload: updateCart
    })
    updateTotal(updateCart)
    cashCartList(updateCart)
  }
  const updateQuantity = (value, product) => {
    const updated = state.cartList.map((item) => {
      if (product.id === item.id) {
        return { ...item, quantity: value }
      }
      return item;
    })
    dispatch({
      type: "Update_Quantity",
      payload: updated
    })
    updateTotal(updated)
    cashCartList(updated)
  }
  const valueToShare = {
    total: state.total,
    cartList: state.cartList,
    addItem,
    removeItem,
    updateTotal,
    updateQuantity,

  }
  return (
    <cartContext.Provider value={valueToShare}>
      {children}
    </cartContext.Provider>
  )
}
export const useCart = () => {
  const context = useContext(cartContext)
  return context;
}