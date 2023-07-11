/* eslint-disable*/
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_POPULAR_NEWS = gql`
  query GetPopularNews {
    newsPosts(where: { newsCategory: { slug: "popular-news" } }, last: 4) {
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

function popularNews() {
  const { loading, error, data } = useQuery(GET_POPULAR_NEWS);

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

  return (
    <>
      <div className="col-span-8" style={{ marginTop: "0.25rem" }}>
        <div
          className="flex flex-col justify-end items-start  p-1 border-2 border-black "
          style={{
            height: "190px",
            background: "indigo",
            backgroundImage: `url(${newsPosts[0].featuredImage.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="font-bold bg-gray-400 text-white border px-1 mb-1 rounded-xl">
            {newsPosts[0].title}
          </p>
          <p className="text-black bg-white rounded-xl px-1 text-sm border-black border-solid border-2">
            {newsPosts[0].excerpt}
          </p>
        </div>
        <div
          className="flex flex-col justify-end items-start  p-1 border-2  border-black "
          style={{
            height: "190px",
            marginTop: "0.75rem",
            background: "pink",
            backgroundImage: `url(${newsPosts[1].featuredImage.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="font-bold bg-gray-400 text-white border px-1 mb-1 rounded-xl">
            {newsPosts[1].title}
          </p>
          <p className="text-black bg-white rounded-xl px-1 text-sm border-black border-solid border-2">
            {newsPosts[1].excerpt}
          </p>
        </div>
      </div>
      {/*
      --------------------------------------------------------------------------
       */}
      <div
        className="col-span-4"
        style={{
          marginTop: "0.25rem",
        }}
      >
        <div
          className="flex flex-col justify-end items-start  p-1 border-2  border-black "
          style={{
            height: "190px",
            background: "green",
            backgroundImage: `url(${newsPosts[2].featuredImage.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="font-bold bg-gray-400 text-white border px-1 mb-1 rounded-xl">
            {newsPosts[2].title}
          </p>
          <p className="text-black bg-white rounded-xl px-1 text-sm border-black border-solid border-2">
            {newsPosts[2].excerpt}
          </p>
        </div>

        <div
          className="flex flex-col justify-end items-start  p-1 border-2  border-black "
          style={{
            height: "190px",
            marginTop: "0.75rem",
            background: "skyblue",
            backgroundImage: `url(${newsPosts[3].featuredImage.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="font-bold bg-gray-400 text-white border px-1 mb-1 rounded-xl">
            {newsPosts[3].title}
          </p>
          <p className="text-black bg-white rounded-xl px-1 text-sm border-black border-solid border-2">
            {newsPosts[3].excerpt}
          </p>
        </div>
      </div>
    </>
  );
}

export default popularNews;
