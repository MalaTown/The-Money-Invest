/*  eslint-disable */
import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import NewsPostCard from "./NewsPostCard";


const GET_TRENDING_NEWS = gql`
  query GetTrendingNews($skip: Int, $limit: Int) {
    newsPosts(
      where: { newsCategory: { slug: "trending-news" } }
      skip: $skip
      first: $limit
      orderBy: publishedAt_DESC
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

function TrendingNews() {
  const limit = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, data } = useQuery(GET_TRENDING_NEWS, {
    variables: { skip: (currentPage - 1) * limit, limit },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { newsPosts } = data;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const isFirstPage = currentPage === 1;

  return (
    <>
      {newsPosts.map((post) => (
        <NewsPostCard key={post.slug} post={post} />
      ))}
      <div className="flex justify-around ">
        {!isFirstPage && (
          <button
            className="bg-white px-2 border-2 border-black rounded-full hover:bg-black hover:text-white hover:border-white"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            ⇐ Previous
          </button>
        )}
        <button
          className="bg-white px-2 border-2 border-black rounded-full hover:bg-black hover:text-white hover:border-white"
          onClick={handleNext}
          disabled={newsPosts.length < limit}
        >
          Next ⇒
        </button>
      </div>
    </>
  );
}

export default TrendingNews;
