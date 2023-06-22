/* eslint-disable */

import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import NewsPostCard from "./NewsPostCard";

const MixedNewsComponent = () => {
  const [mixedNews, setMixedNews] = useState([]);

  const GET_MIXED_NEWS = gql`
    query GetMixedNews {
      topNews: newsPosts(
        where: { newsCategory: { slug: "top-news" } }
        orderBy: publishedAt_DESC
        first: 1
      ) {
        title
        slug
        excerpt
        content {
          raw
        }
        featuredImage {
          url
        }
      }
      trendingNews: newsPosts(
        where: { newsCategory: { slug: "trending-news" } }
        orderBy: publishedAt_DESC
        first: 1
      ) {
        title
        slug
        excerpt
        content {
          raw
        }
        featuredImage {
          url
        }
      }
      popularNews: newsPosts(
        where: { newsCategory: { slug: "popular-news" } }
        orderBy: publishedAt_DESC
        first: 1
      ) {
        title
        slug
        excerpt
        content {
          raw
        }
        featuredImage {
          url
        }
      }
      recentNews: newsPosts(
        where: { newsCategory: { slug: "recent-news" } }
        orderBy: publishedAt_DESC
        first: 1
      ) {
        title
        slug
        excerpt
        content {
          raw
        }
        featuredImage {
          url
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_MIXED_NEWS);

  useEffect(() => {
    if (data) {
      const newsData = Object.values(data).flat();
      setMixedNews(newsData);
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error("Error fetching mixed news:", error);
    return <p>Error fetching mixed news</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-white text-shadow ont-bold border-b-4 border-white mb-2 ">
        Recent News
      </h1>
      <div>
        {mixedNews.map((post) => (
          <NewsPostCard key={news.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MixedNewsComponent;
