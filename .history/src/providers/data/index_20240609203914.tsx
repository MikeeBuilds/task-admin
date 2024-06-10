export const client = new GraphQLClient({
  url: "http://localhost:3000/graphql",
  headers: {
    "Content-Type": "application/json",
  },
});