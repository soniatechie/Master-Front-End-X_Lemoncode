import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Lookup {
    id: String!
    name: String!
  }

  type Character {
    id: Int!
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
    character(id: Int!): Character!
  }

  input LookupInput {
    id: String!
    name: String!
  }

  input CharacterInput {
    id: Int!
    name: String!
    status: String!
    species: String!
    type: String!
    gender: String!
    image: String!
    episode: [String!]!
    bestSentences: [LookupInput!]
  }

  type Mutation {
    saveCharacter(character: CharacterInput!): Boolean
  }
`;
