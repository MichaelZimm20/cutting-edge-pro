import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      _id
      products {
        image
        _id
        price
        description
        name
        quantity
        size
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ADMIN = gql`
  mutation addAdmin($username: String!, $email: String!, $password: String!) {
    addAdmin(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_PRODUCT = gql `
mutation updateProduct($id: ID!, $quantity: Int!) {
    updateProduct(_id: $id, quantity: $quantity) {
      image
      price
      quantity
      description
      name
    }
  }
`;