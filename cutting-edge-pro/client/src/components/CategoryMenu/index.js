import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom'



function CategoryMenu() {
    const [state, dispatch] = useStoreContext();
    const { categories } = state;
    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
    const navigate = useNavigate();

    useEffect(() => {
        //if categoryData exists or has changed from the response of useQuery, then run dispatch()
        if (categoryData) {
            // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories
            });

            categoryData.categories.forEach(category => {
                idbPromise('categories', 'put', category);
            });
        } else if (!loading) {
            // since offline, get all of the data from the `products` store
            idbPromise('categories', 'get').then(categories => {
                // retrieve data to set global state for offline browsing
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories
                });
            });
        }
    }, [categoryData, loading, dispatch]);


    // click handler to help the dropdown navigate onClick to the correct page
    const handleClick1 = (linkName) => {
        if (linkName === 'wood') {
            navigate('/wood')
        } else if (linkName === 'metal') {
            navigate('/metal')
        } else if (linkName === 'acrylics') {
            navigate('/acrylics')
        } else {
            navigate('/');
        }
        
    };


const handleClick2 = id => {
    dispatch({
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: id
      });
}


    // maps through the category names and turn them into a Dropdown link formatted as a button
    return (
        <div>

            <NavDropdown title="Products" id="basic-nav-dropdown">
                {categories.map((item) => (
                    <NavDropdown.Item style={{ textDecoration: 'none', color: '#000000' }}
                       
                        onClick={() => {
                            handleClick1(item.name.toLowerCase()); 
                            handleClick2(item._id)}}
                       key={item._id}
                    >
                        {item.name}
                    </NavDropdown.Item>
                ))}


                <NavDropdown.Divider />
                <NavDropdown.Item href="/games">
                    Games
                </NavDropdown.Item>
            </NavDropdown>

        </div>
    );
}

export default CategoryMenu;


// <Link style={{ textDecoration: 'none', color: '#000000' }}
// to={`/${item.name.toLowerCase()}`}
// onClick={() => handleClick1(item.name.toLowerCase())}
// >

// <NavDropdown.Item onClick={() => {handleClick2(item._id)}} key={item._id}>{item.name}

// </NavDropdown.Item>
// </Link>