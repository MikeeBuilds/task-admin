import { GraphQLClient } from "@refinedev/nestjs-query";

export const API_URL = "https://"

export const client = new GraphQLClient(API_URL, {});