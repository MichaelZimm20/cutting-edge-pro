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
query user($username: String!)
    {
        user(username: $username) {
            _id
            email
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

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`