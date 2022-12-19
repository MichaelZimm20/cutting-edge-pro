const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Category {
    _id: ID
    name: String
  }
  
  type Product{
      _id: ID
      name: String
      description: String
      price: Float
      category: Category
  }
  
type User {
    _id: ID
    username: String
    email: String
    password: String
    orders: [Order]
}

type Admin {
    _id: ID
    username: String
    email: String
    password: String
    users: [User]
}


type Order{
    _id: ID
    purchaseDate: String
    products: [Product]
}

type Checkout {
    session: ID
}

type Auth{
    token: ID
    user: User
}


type Query {
    categories: [Category]
    products(name: String): [Product]
    productsByCategory(category: ID!): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(username: String!, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addAdmin(username: String!, email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;