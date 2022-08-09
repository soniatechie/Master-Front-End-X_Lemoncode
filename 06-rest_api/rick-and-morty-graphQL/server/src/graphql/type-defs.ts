import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Lookup {
    id: ID!
    name: String!
  }

  type Character {
    id: ID!
    name: String!
    status: String!
    species: String!
    type: String!
    gender: String!
    image: String!
    episode: [String!]!
    bestSentences: [Lookup!]
  }

  type Query {
    characters: [Character!]!
  }
`;
