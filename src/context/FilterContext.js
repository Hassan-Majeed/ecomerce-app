import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../reducers/FilterReducer';
import { useProductContext } from "./productcontex";
const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    gridView: true,
    sortingValues: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
}
const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);
    // To show products in grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }
    // To show products in List view
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" })
    }
    // To Sort data
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [products, state.sortingValues, state.filters]);

    const sorting = (e) => {
        let userValue = e.target.value;
        return dispatch({ type: "GET_SORT_VALUE", payload: userValue })
    }
    // Update Filter Values
    const updateFilterValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } })
    }
    // clear all filters
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
    }
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products]);

    return (
        <>
            <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters }}>
                {children}
            </FilterContext.Provider>
        </>
    )
}
const useFilterContext = () => {
    return useContext(FilterContext);
}
export { FilterContextProvider, FilterContext, useFilterContext }
