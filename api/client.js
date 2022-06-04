import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  process.env.GRAPHCMS_CONTENT_API,
  {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_AUTH_TOKEN}`,
    },
  },
);

export default client;
