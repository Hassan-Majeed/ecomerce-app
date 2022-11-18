import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import reducer from '../reducers/CartReducer';
const CartContext = createContext();
const getStaoredData = () => {
     let storedCartData = localStorage.getItem("tableData");
     if (storedCartData === []) {
          return []
     } else {
          return JSON.parse(storedCartData);
     }
}
const initialState = {
     // cart: [],
     cart: getStaoredData(),
     total_item: "",
     total_amount: "",
     shipping_fee: 50000,
}
const CartProvider = ({ children }) => {
     const [state, dispatch] = useReducer(reducer, initialState);
     const add_ToCart = (id, color, stock, quantity, product) => {
          dispatch({ type: "ADD_TO_CART", payload: { id, color, stock, quantity, product } });
     }
     const removeItem = (id) => {
          dispatch({ type: "REMOVE_TO_CART", payload: id });
     }
     // to clear all items in cart
     const clearCart = () => {
          dispatch({ type: "CLEAR_CART" });
     }
     // set data in local storage
     useEffect(() => {
          localStorage.setItem("tableData", JSON.stringify(state.cart))
     }, [state.cart])

     return (
          <>
               <CartContext.Provider value={{ ...state, add_ToCart, removeItem, clearCart }}>
                    {children}
               </CartContext.Provider>
          </>
     )
}
const useCartContext = () => {
     return useContext(CartContext);
}
export { CartProvider, CartContext, useCartContext }
