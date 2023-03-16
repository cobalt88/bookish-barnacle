import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  schema {
    query: Query
  }
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello World!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await server.listen({ port: 9000 });
console.log(`Server ready at ${url}`);
// another option for the same thing as above
// const serverInfo = await server.listen({ port: 9000 });
// console.log(`Server ready at ${serverInfo.url}`);
