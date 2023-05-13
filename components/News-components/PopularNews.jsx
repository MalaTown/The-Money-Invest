/* eslint-disable*/
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_POPULAR_NEWS = gql`
  query GetPopularNews {
    popularNews(last: 4) {
      title
      slug
      featuredImage {
        url
      }
      excerpt
      content {
        text
      }
    }
  }
`;

function popularNews() {
  const { loading, error, data } = useQuery(GET_POPULAR_NEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { popularNews } = data;

  return (
    <>
      <div className="col-span-8" style={{ marginTop: "0.25rem" }}>
        <div
          className="flex flex-col justify-end items-start  p-1 border-2 border-black "
          style={{
            height: "190px",
            background: "indigo",
            backgroundImage: `url(${popularNews[0].featuredImage.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="font-bold bg-gray-400 text-white border px-1 mb-1 rounded-xl">
            {popularNews[0].title}
          </p>
          <p className="text-black bg-white rounded-xl px-1 text-sm border-black border-solid border-2">
            {popularNews[0].excerpt}
          </p>
        </div>
        <div
          className="flex flex-col justify-end items-start  p-1 border-2  border-black "
          style={{
            height: "190px",
            marginTop: "0.75rem",
            background: "pink",
            backgroundImage: `url(${popularNews[1].featuredImage.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="font-bold bg-gray-400 text-white border px-1 mb-1 rounded-xl">
            {popularNews[1].title}
          </p>
          <p className="text-black bg-white rounded-xl px-1 text-sm border-black border-solid border-2">
            {popularNews[1].excerpt}
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
            backgroundImage: `url(${popularNews[2].featuredImage.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="font-bold bg-gray-400 text-white border px-1 mb-1 rounded-xl">
            {popularNews[2].title}
          </p>
          <p className="text-black bg-white rounded-xl px-1 text-sm border-black border-solid border-2">
            {popularNews[2].excerpt}
          </p>
        </div>

        <div
          className="flex flex-col justify-end items-start  p-1 border-2  border-black "
          style={{
            height: "190px",
            marginTop: "0.75rem",
            background: "skyblue",
            backgroundImage: `url(${popularNews[3].featuredImage.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="font-bold bg-gray-400 text-white border px-1 mb-1 rounded-xl">
            {popularNews[3].title}
          </p>
          <p className="text-black bg-white rounded-xl px-1 text-sm border-black border-solid border-2">
            {popularNews[3].excerpt}
          </p>
        </div>
      </div>
    </>
  );
}

export default popularNews;
