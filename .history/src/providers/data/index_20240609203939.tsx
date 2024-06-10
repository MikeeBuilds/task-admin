export const client = new GraphQLClient(API_URL{
  url: "http://localhost:3000/graphql",
  headers: {
    "Content-Type": "application/json",
  },
});