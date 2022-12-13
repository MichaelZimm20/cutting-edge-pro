const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: _id
    username: String
    email: String
    password: String
    orders: [Order]
}

type Admin {
    _id: _id
    username: String
    email: String
    password: String
    users: [User]
}

type Category{
    _id: ID
    name: String
}

type Product{
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    size: String
    price: Float
    category: Category
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
    me: User
    users: [User]
    user(username: String!): User
    orders(username: String): [Order]
    order(_id: ID!): Order
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(): Order

}
`;

module.exports = typeDefs;