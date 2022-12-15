// import gql from apollo/client 
import { gql } from '@apollo/client';

// show and get one product at a time 
export const QUERY_PRODUCTS = gql`
    query getProducts($category: ID) {
        products(category: $category) {
            _id
            name
            description
            price 
            quantity
            image
            category {
                _id
            }
        }
    }
`;

// show and get all products 
export const QUERY_ALL_PRODUCTS = gql`
    {
        products {
            _id 
            name
            description
            price 
            quantity
        }
    }
`;


export const QUERY_USER = gql`
    {
        user {
            username
            orders{
                _id
                purchaseDate
                products {
                    _id
                    name
                    description
                    price 
                    quantity
                    image
                }
            }
        }
    }
`;