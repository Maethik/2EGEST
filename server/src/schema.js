const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    events: [Event!]
  }

  type Event {
    id: ID!
    title: String!
    date: String!
    user: User!
  }

  type Query {
    users: [User!]
    events: [Event!]
  }

  type Mutation {
    addUser(name: String!): User!
  }
`;

export default typeDefs;