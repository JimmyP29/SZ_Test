const { ApolloServer, gql } = require("apollo-server");
const { getSoftSkills, createSoftSkill, getSearchedSoftSkills } = require("./softSkills");

const typeDefs = gql`
  type Query {
    softSkills: [SoftSkill!]
    searchSoftSkills(searchText: String!): [SoftSkill!]
  }

  type Mutation {
    createSoftSkill(name: String!, description: String): SoftSkill!
  }

  type SoftSkill {
    id: ID!
    name: String!
    description: String
  }
`;

const resolvers = {
  Query: {
    softSkills: () => getSoftSkills(),
    searchSoftSkills: (_, args) => {

      return getSearchedSoftSkills(args.searchText);
    }
  },
  Mutation: {
    createSoftSkill: (_, { name, description }) =>
      createSoftSkill(name, description),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
