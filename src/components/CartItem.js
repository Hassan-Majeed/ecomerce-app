import { React, useState } from "react";
import FormatPrice from "../helpers/FormatPrice";
// import CartAmountToggle from "../CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";
import CartAmountToggle from "./CartAmountToggle";

const CartItem = ({ id, name, image, color, price, stock, quantity }) => {
     const { removeItem } = useCartContext();
     const setIncreament = () => {
          // quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
     }
     const setDecreament = () => {
          // quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
     }
     return (
          <div className="cart_heading grid grid-five-column">
               <div className="cart-image--name">
                    <div>
                         <figure>
                              <img src={image} alt={id} />
                         </figure>
                    </div>
                    <div>
                         <p>{name}</p>
                         <div className="color-div">
                              <p>color:</p>
                              <div
                                   className="color-style"
                                   style={{ backgroundColor: color, color: color }}></div>
                         </div>
                    </div>
               </div>
               {/* price   */}
               <div className="cart-hide">
                    <p>
                         <FormatPrice price={price} />
                    </p>
               </div>

               {/* Quantity  */}
               <CartAmountToggle
                    quantity={quantity}
                    setIncreament={setIncreament}
                    setDecreament={setDecreament}
               />
               {/* //Subtotal */}
               <div className="cart-hide">
                    <p>
                         <FormatPrice price={price * quantity} />
                    </p>
               </div>

               <div>
                    <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
               </div>
          </div>
     );
};

export default CartItem;
