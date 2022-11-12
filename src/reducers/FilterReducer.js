const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS": {
            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
            }
        }
        case "SET_GRID_VIEW": {
            return {
                ...state,
                gridView: true
            }
        }
        case "SET_LIST_VIEW": {
            return {
                ...state,
                gridView: false
            }
        }
        case "GET_SORT_VALUE": {
            return {
                ...state,
                sortingValues: action.payload
            }
        }
        case "SORTING_PRODUCTS": {
            let newSortData;
            const { filterProducts, sortingValues } = state;
            let tempStoreProduct = [...filterProducts];
            const sortingProducts = (a, b) => {
                if (sortingValues === "lowest") {
                    return a.price - b.price;
                }
                if (sortingValues === "highest") {
                    return b.price - a.price;
                }
                if (sortingValues === "a-z") {
                    return a.name.localeCompare(b.name)
                }
                if (sortingValues === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }
            newSortData = tempStoreProduct.sort(sortingProducts);
            return {
                ...state,
                filterProducts: newSortData,
            }


        }
        case "UPDATE_FILTERS_VALUE": {
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }
        }
        case "FILTER_PRODUCTS": {
            const { allProducts } = state;
            let tempFilterProduct = [...allProducts];
            const { text, category, company } = state.filters
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((currentElem) => {
                    return currentElem.name.toLowerCase().includes(text);
                });
            }

            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (currentElem) => currentElem.category === category
                );
            }

            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (currentElem) => currentElem.company.toLowerCase() === company.toLowerCase()
                );
            }
            return {
                ...state,
                filterProducts: tempFilterProduct,
            }
        }
        default: return state
    }
}
export default FilterReducer;