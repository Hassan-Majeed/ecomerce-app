import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ quantity, setIncreament, setDecreament }) => {
    return (
        <div className="cart-button">
            <div className="amount-toggle">
                <button onClick={() => setDecreament()}>
                    <FaMinus />
                </button>
                <div className="amount-style">{quantity}</div>
                <button onClick={() => setIncreament()}>
                    <FaPlus />
                </button>
            </div>
        </div>
    );
};

export default CartAmountToggle;
