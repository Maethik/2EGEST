export const typeDefs = `#graphql

type DateRange {
  start: String!
  end: String!
}

input DateRangeInput {
  start: String!
  end: String!
}

input UserInput {
  name: String
}

type User {
  id: ID!
  name: String!
  events: [Event!]
}

type Event {
  id: ID!
  title: String!
  date: DateRange!
  organizer: User!
  participants: [User!]
}

type AuthPayload {
  token: String!
  user: User!
}

type Query {
  users: [User!]
  user(id: ID!): User
  events: [Event!]
  event(id: ID!): Event
}

type Mutation {
  addUser(name: String!): User!
  deleteUser(id: ID!): Boolean!
  updateUser(id: ID!, user: UserInput!): User!
  addEvent(title: String!, date: DateRangeInput!, organizer: ID!): Event!
  login(username: String!, password: String!): AuthPayload
  register(username: String!, password: String!): User!
}
`;
