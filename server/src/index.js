import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schemas/typeDefs.js";
import { resolvers } from "./resolvers/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT }
});

console.log(`🚀 Server ready at ${url}`);
