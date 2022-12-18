// createing store and its providers and props 

//imports 
import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

// call createContext from react, used to share data that can be 
// considered 'global'
const StoreContext = createContext();

// will make the state data that;s passed into as a prop available to all other components
const { Provider } = StoreContext;


// custom provider function, manages and updates our state using the reducer
const StoreProvider = ({ value = [], ...props }) => {

    //setting the intital states and use dispatch as "getter"
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });

    // confirming if state is working
    console.log('Globalstate:', state)

    // dispatch: method use to update our state
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
}

// export functions to be used
export { StoreProvider, useStoreContext };