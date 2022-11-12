import axios from "axios";
import { useReducer } from "react";
import { useContext, createContext, useEffect } from "react";
import reducer from "../reducers/productReducer";
// call api
const API = "https://api.pujakaitem.com/api/products";

// creating a context
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    singleProduct: {},
    isSingleLoading: false,
}

const AppContext = createContext();
// creating a provider
const AppProvider = ({ children }) => {
    // Call api for single product page  
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const response = await axios.get(url);
            const singleProductData = await response.data
            console.log("singleProductData==>",singleProductData)
            dispatch({ type: "SINGLE_PRODUCT_API_DATA", payload: singleProductData })
        } catch (error) {
            dispatch({ type: "SINGLE_API_ERROR" })
        }
    }
  
    // using reducer to set data  globally
    const [state, dispatch] = useReducer(reducer, initialState);
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const response = await axios.get(url);
            const productsData = await response.data 
            dispatch({ type: "PRODUCT_API_DATA", payload: productsData })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }


    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    );
}

// creating custom Hook to use appcontext 
const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext }