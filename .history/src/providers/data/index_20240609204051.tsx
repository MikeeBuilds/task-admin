import { GraphQLClient } from "@refinedev/nestjs-query";

export const API_URL = "https://api.crm"

export const client = new GraphQLClient(API_URL, {});