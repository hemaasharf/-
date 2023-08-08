//statr for current state values & action for what u pass to dispatch
export const CartReducer = (state, action)=>{

  const {type, payload} = action
  switch(type){
    case "Add_To_Cart":
      return {...state, cartList: payload }
    case "Remove_From_Cart":
      return {...state, cartList: payload}
    case "Total_Update":
      return {...state, total: payload }
    case "Update_Quantity":
      return {...state, cartList: payload }
    case "Load_Cached_Cart":
      return {...state, cartList: payload }
    default:
      throw new Error("there is no such case in CartReducer")
    }

}