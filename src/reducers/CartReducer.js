const CartReducer = (state, action) => {
     switch (action.type) {
          case "ADD_TO_CART": {
               let { id, color, stock, quantity, product } = action.payload;
               let cartProduct;
               cartProduct = {
                    id: id + color,
                    name: product.name,
                    color,
                    quantity,
                    image: product.image[0].url,
                    price: product.price,
                    max: product.stock,
               };
               return {
                    state,
                    cart: [...state.cart, cartProduct],
               }
          }
          case "REMOVE_TO_CART": {
               let updatedCartProduct = state.cart.filter(
                    (currElem) => currElem.id !== action.payload
               );
               return {
                    ...state,
                    cart: updatedCartProduct,
               }
          }
          // to clear all cart item
          case "CLEAR_CART": {
               return {
                    ...state,
                    cart: [],
               }
          }

          default: return state
     }
};
export default CartReducer;