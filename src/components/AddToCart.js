import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import CartAmountToggle from "./CartAmountToggle";
const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const setIncreament = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  }
  const setDecreament = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  }
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {
            colors?.map((curColor, index) => {
              return (
                <Button
                  key={index}
                  style={{ backgroundColor: curColor }}
                  onClick={() => setColor(curColor)}
                  className={color === curColor ? "btnStyle active" : "btnStyle"}
                >
                  {color === curColor ? <FaCheck className="checkStyle" /> : null}
                </Button>
              )
            })
          }
        </p>
        {stock > 0 && <CartAmountToggle
          quantity={quantity}
          setIncreament={setIncreament}
          setDecreament={setDecreament}
        />}
        <NavLink to="/cart">
          <Button className="btn">Add To Cart</Button>
        </NavLink>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    width: 30px;
    padding: 5px;
    height: 30px;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;

