const productReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING": {
            return {
                ...state,
                isLoading: true
            }
        }

        case "PRODUCT_API_DATA":
            const featureData = action.payload.filter((currentElem) => {
                return currentElem.featured === true;
            });
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData
            }

        case "API_ERROR": {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case "SET_SINGLE_LOADING": {
            return {
                ...state,
                isSingleLoading: true
            }
        }
        case "SINGLE_PRODUCT_API_DATA":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload
            }

        case "SINGLE_API_ERROR": {
            return {
                ...state,
                isSingleLoading: false,
                isError: true
            }
        }
        default:
            return state;
    }
}
export default productReducer;