export const typeDefs = `#graphql
	fragment UserInfo on User {
		id
		name
	}

	type DateRange {
		start: String!
		end: String!
	}

	input DateRangeInput {
		start: String!
		end: String!
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

	type Query {
		users: [User!]
		events: [Event!]
	}

	type Mutation {
		addUser(name: String!): User!
		deleteUser(id: ID!): Boolean!
		addEvent(title: String!, date: DateRangeInput!, organizer: ID!): Event!
	}
`;
