/* eslint-disable quotes */
import React from 'react'
import { gql, useQuery } from "@apollo/client";

const GET_TOP_NEWS = gql`
  query GetTopNews {
    topNewsPosts(last: 4) {
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

function TopNews() {
  const { loading, error, data } = useQuery(GET_TOP_NEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div style={{ width: "1250px" }} className="flex items-center max-md:flex-col ">
      <div
        className="flex flex-col justify-end items-start p-1 border-2  border-black "
        style={{
          height: "400px",
          width: "313px",
          float: "left",
          background: `
            linear-gradient(to bottom, rgba(0, 153, 247, 0.5), rgba(241, 23, 18, 0.5)),
            url(${data.topNewsPosts[0].featuredImage.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <p className="font-bold bg-gray-400 text-white border px-1">
          {data.topNewsPosts[0].title}
        </p>
        {data.topNewsPosts[0].excerpt}
      </div>

      <div
        className="flex flex-col justify-end items-start  p-1 border-2  border-black  "
        style={{
          height: "400px",
          width: "624px",
          margin: "10px",
          background: `
            linear-gradient(to bottom, rgba(21, 153, 87, 0.5), rgba(0, 76, 153, 0.5)),
            url(${data.topNewsPosts[1].featuredImage.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <p className="font-bold bg-gray-400 text-white border px-1">
          {data.topNewsPosts[1].title}
        </p>
        {data.topNewsPosts[1].excerpt}
      </div>

      <div className="max-md:flex-1">
        <div
          className="flex flex-col justify-end items-start  p-1 border-2  border-black mb-2 "
          style={{
            height: "195px",
            width: "313px",
            background: `
              linear-gradient(to bottom, rgba(239, 148, 172, 0.5), rgba(59, 107, 239, 0.5)),
              url(${data.topNewsPosts[2].featuredImage.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="font-bold bg-gray-400 text-white border px-1">
            {data.topNewsPosts[2].title}
          </p>
          {data.topNewsPosts[2].excerpt}
        </div>
        <div
          className="flex flex-col justify-end items-start  p-1 border-2  border-black "
          style={{
            height: "195px",
            width: "313px",
            background: `
              linear-gradient(to bottom, rgba(
  linear-gradient(to bottom, rgba(255, 204, 0, 0.5), rgba(241, 23, 18, 0.5)),
              url(${data.topNewsPosts[3].featuredImage.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="font-bold bg-gray-400 text-white border px-1">
            {data.topNewsPosts[3].title}
          </p>
          {data.topNewsPosts[3].excerpt}
        </div>
      </div>
    </div>
  );
}

export default TopNews;