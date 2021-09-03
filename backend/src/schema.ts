import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Letter {
    id: ID!
    title: String!
    content: String!
    open: Boolean!
    date: String!
  }

  type Query {
    letters: [Letter!]!
    letter(id: Int!): Letter!
  }

  type Mutation {
    addLetter(title: String!, content: String!, date: String!): Letter!
    editLetter(id: Int!, title: String!, content: String!, date: String!): Letter!
    openLetter(id: Int): Letter!
  }
`);
