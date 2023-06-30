/* eslint-disable */
import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_TOP_NEWS = gql`
  query GetTopNews {
    newsPosts(where: { newsCategory: { slug: "top-news" } }, last: 3) {
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

function TopNews() {
  const { loading, error, data } = useQuery(GET_TOP_NEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div
      // style={{ width: "1250px" }}
      className="container flex items-center max-md:flex-col"
    >
      <div
        className="TopNews TopNews-type1 flex flex-col justify-end items-start p-1 border-2  border-black "
        style={{
          width: "25%",
          float: "left",
          background: `
            linear-gradient(to bottom, rgba(0, 153, 247, 0.5), rgba(241, 23, 18, 0.5)),
            url(${data.newsPosts[0].featuredImage.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <p className="font-bold bg-gray-400 text-white border px-1">
          {data.newsPosts[0].title}
        </p>
        {data.newsPosts[0].excerpt}
      </div>

      <div
        className="TopNews TopNews-type1 flex flex-col justify-end items-start  p-1 border-2  border-black  "
        style={{
          width: "50%",
          margin: "10px",
          background: `
            linear-gradient(to bottom, rgba(21, 153, 87, 0.5), rgba(0, 76, 153, 0.5)),
            url(${data.newsPosts[1].featuredImage.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <p className="font-bold bg-gray-400 text-white border px-1">
          {data.newsPosts[1].title}
        </p>
        {data.newsPosts[1].excerpt}
      </div>

      {/* <div className="TopNewsBox2">
        <div
          className="TopNews TopNews-type2 flex flex-col justify-end items-start  p-1 border-2  border-black mb-2 max-md:mb-0"
          style={{
            background: `
              linear-gradient(to bottom, rgba(239, 148, 172, 0.5), rgba(59, 107, 239, 0.5)),
              url(${data.newsPosts[2].featuredImage.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="font-bold bg-gray-400 text-white border px-1">
            {data.newsPosts[2].title}
          </p>
          {data.newsPosts[2].excerpt}
        </div>
        <div
          className="TopNews TopNews-type2 flex flex-col justify-end items-start  p-1 border-2  border-black "
          style={{
            background: `
  linear-gradient(to bottom, rgba(255, 204, 0, 0.5), rgba(241, 23, 18, 0.5)),
              url(${data.newsPosts[3].featuredImage.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="font-bold bg-gray-400 text-white border px-1">
            {data.newsPosts[3].title}
          </p>
          {data.newsPosts[3].excerpt}
        </div>
      </div> */}
      <div
        className="TopNews TopNews-type1 flex flex-col justify-end items-start p-1 border-2  border-black "
        style={{
          width: "25%",
          float: "left",
          background: `
            linear-gradient(to bottom, rgba(0, 153, 247, 0.5), rgba(241, 23, 18, 0.5)),
            url(${data.newsPosts[2].featuredImage.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <p className="font-bold bg-gray-400 text-white border px-1">
          {data.newsPosts[2].title}
        </p>
        {data.newsPosts[2].excerpt}
      </div>
    </div>
  );
}

export default TopNews;
