import { GraphQLClient } from "@refinedev/nestjs-query";

export const client = new GraphQLClient(API_URL, {});