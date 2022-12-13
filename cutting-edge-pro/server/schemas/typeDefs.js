const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: _id
    username: String
    email: String
    password: String
    orders: [Order]
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