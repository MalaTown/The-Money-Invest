/* eslint-disable */

import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function newsComments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateNewsComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createNewsComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          newsPost: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  const { name, email, comment, slug } = req.body;

  try {
    const result = await graphQLClient.request(query, {
      name,
      email,
      comment,
      slug,
    });

    return res.status(200).json(result);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while submitting the comment." });
  }
}
