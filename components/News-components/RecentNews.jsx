/*  eslint-disable */
import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import NewsPostCard from "./NewsPostCard";

const GET_RECENT_NEWS = gql`
  query GetRecentNews($skip: Int, $limit: Int) {
    newsPosts(
      where: { newsCategory: { slug: "recent-news" } }
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

function RecentNews() {
  const limit = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, data } = useQuery(GET_RECENT_NEWS, {
    variables: { skip: (currentPage - 1) * limit, limit },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!data.newsPosts.length) {
    return (
      <div className="container">
        <p>No news found.</p>
      </div>
    );
  }

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
      <div className="flex justify-around">
        {!isFirstPage && (
          <button
            className="bg-white px-2 border-solid border-x border-black rounded-lg hover:bg-black hover:text-white hover:border-white"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            ⇐ Previous
          </button>
        )}
        <button
          className="bg-white px-2 border-solid border-x border-black rounded-lg hover:bg-black hover:text-white hover:border-white"
          onClick={handleNext}
          disabled={newsPosts.length < limit}
        >
          Next ⇒
        </button>
      </div>
    </>
  );
}
export default RecentNews;
