///// CHECKED

// imports 
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';

import ProductItem from '../ProductItem';
import { QUERY_PRODUCTS_BY_CATEGORY, QUERY_PRODUCT, QUERY_ALL_PRODUCTS, QUERY_PRODUCTS } from '../../utils/queries';
import { UPDATE_PRODUCTS } from '../../utils/actions';

import Saw from '../../assets/images/circular_saw_blade.png';
import '../../App.css';

function ProductList() {
    // use state for globalstate and dispatch to update the globalstate
    const [state, dispatch] = useStoreContext();

    // destructure the currentCategory from globalstate
    const { currentCategory } = state;
    console.log(currentCategory);

    
    // destructure loading and data for products
    const { loading, data } = useQuery(QUERY_PRODUCTS , {
      // variables: {category: currentCategory}
    });
    console.log('data', data);

    useEffect(() => {

        // if there's data to be stored 
        if (data) {
            //store it in the globalstate
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });

            //take each product and save it to IndexedDB using the helper function
            data.products.forEach((product) => {
            idbPromise('products', 'put', product)
            });
        } else if (!loading) {
            // since offline, get all of the data from the `products` store
            idbPromise('products', 'get').then((products) => {
            // retrieve data to set global state for offline browsing
            dispatch({
              type: UPDATE_PRODUCTS,
              products: products
            });
          });
        }
    }, [data, loading, dispatch]);

    // if products equal to current catergoy then display those specific products 
    function filterProducts() {
        if(!currentCategory) {
          return state.products;
        }
    
        return state.products.filter((product) => {
          // console.log('product', product);
          return product.category._id === currentCategory
        
          
        })
      }

      
      return (
        <div className="my-2">
          {state.products.length ? (
            <div className="flex-row">
              {filterProducts().map((product) => (
                <ProductItem
                  key={product._id}
                  _id={product._id} 
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  description={product.description}              
                />
              ))}
            </div>
          ) : (
            <h3>You haven't added any products yet!</h3>
          )}
          {loading ? <img src={Saw} style={{ width: '200px', height: '200px' }} className='App-logo' alt="loading" /> : null}
        </div>
      );

}

export default ProductList