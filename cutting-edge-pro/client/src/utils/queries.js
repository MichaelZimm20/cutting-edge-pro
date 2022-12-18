// import gql from apollo/client 
import { gql } from '@apollo/client';

// show and get one product at a time 
export const QUERY_PRODUCTS_BY_CATEGORY = gql`
    query getProducts($categoryId: ID!) {
        products(categoryId: $categoryId) {
            _id
            name
            description
            price
            category {
                name
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
            category {
                name
              }
        }
    }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
query user($username: String!)
    {
        user {
            username
            email
            orders{
                _id
                purchaseDate
                products {
                    _id
                    name
                    description
                    price 
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