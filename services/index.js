/* eslint-disable */
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getNewsPosts = async () => {
  const query = gql`
    query MyQuery {
      newsPostsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            newsCategory {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.newsPostsConnection.edges;
};

export const getTrendingNewsPosts = async () => {
  const query = gql`
    query GetTrendingNewsPosts {
      trendingnewspostsConnection {
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.trendingnewspostsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getNewsPostDetails = async (slug) => {
  const query = gql`
    query GetNewsPostDetails($slug: String!) {
      newsPosts(where: { slug: $slug }) {
        slug
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        content {
          raw
        }
        newsCategory {
          name
          slug
        }
      }
    }
  `;

  const variables = { slug }; // Create an object to hold the variables

  const result = await request(graphqlAPI, query, variables);

  return result.newsPosts[0];
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!, $slug: String!) {
      next: posts(
        first: 1
        orderBy: createdAt_ASC
        where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous: posts(
        first: 1
        orderBy: createdAt_DESC
        where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const submitComment = async (obj) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const submitNewsComment = async (obj) => {
  const result = await fetch("/api/newsComments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getNewsComments = async (slug) => {
  const query = gql`
    query GetNewsComments($slug: String!) {
      newsComments(where: { newsPost: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.newsComments;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getTopNews = async () => {
  const query = gql`
    query GetTopNews($slug: String!) {
      topNewsPost(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.getTopNews;
};

export const GET_QUIZ_QUESTIONS = async () => {
  const query = gql`
    query GetQuizQuestions($difficulty: Difficulty!) {
      quizQuestions(where: { difficulty: $difficulty }) {
        id
        questionTitle
        options
        correctAnswer
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.quizQuestions;
};

export const Get_Articles = async () => {
  const query = gql`
    query GetArticles {
      articles {
        title
        slug
        content {
          raw
        }
        featuredImage {
          url
        }
        author {
          name
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.articles;
};

export const Get_Affiliates = async () => {
  const query = gql`
    query Get_Affiliates {
      affiliates {
        title
        slug
        content {
          raw
        }
        featuredImage {
          url
        }
        author {
          name
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.affiliates;
};