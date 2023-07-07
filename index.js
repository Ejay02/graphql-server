import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";

import db from "./_db.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },

    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },

    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },
};

// server setup
const server = new ApolloServer({
  //typedefs
  // A schema is a collection of type definitions (hence "typeDefs")
  // that together define the "shape" of queries that are executed against
  // your data.
  typeDefs,
  resolvers, //resolvers: how to respond to query in the graph
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("👊🏽 Server ready at port:", 4000);
