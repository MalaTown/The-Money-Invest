/* eslint-disable */

import React from "react";
import { PostCard, Categories, PostWidget, BlogHeader, NewsApi } from "../components";
import { getNewsPosts } from "../services";
import NewsPostCard from "../components/News-components/NewsPostCard";
import { useQuery, gql } from "@apollo/client";
import NewsApp from "../components/News-components/NewsApp";

// function NewsSection() {
export default function News({ newsposts }) {
  const { loading, error, data } = useQuery(gql`
    query NewsPost {
      topNews1: topNewsPost(where: { slug: "first" }) {
        excerpt
        title
        slug
        featuredImage {
          url
        }
      }
      topNews2: topNewsPost(where: { slug: "second" }) {
        excerpt
        title
        slug
        featuredImage {
          url
        }
      }
      topNews3: topNewsPost(where: { slug: "third" }) {
        excerpt
        title
        slug
        featuredImage {
          url
        }
      }
      topNews4: topNewsPost(where: { slug: "fourth" }) {
        excerpt
        title
        slug
        featuredImage {
          url
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* -------------------------------Top Section start------------------------------  */}

      <div style={{ width: "1250px" }} className="flex items-center ">
        <div
          className="flex flex-col justify-end items-start"
          style={{
            height: "400px",
            width: "313px",
            float: "left",
            background: `
      linear-gradient(to bottom, rgba(0, 153, 247, 0.5), rgba(241, 23, 18, 0.5)),
      url(${data.topNews1.featuredImage.url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="font-bold bg-gray-400 text-white border px-1">
            {data.topNews1.title}
          </p>
          {data.topNews1.excerpt}
        </div>

        <div
          className="flex flex-col justify-end items-start "
          style={{
            height: "400px",
            width: "624px",
            margin: "10px",
            background: `
      linear-gradient(to bottom, rgba(21, 153, 87, 0.5), rgba(0, 76, 153, 0.5)),
      url(${data.topNews2.featuredImage.url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="font-bold bg-gray-400 text-white border px-1">
            {data.topNews2.title}
          </p>
          {data.topNews2.excerpt}
        </div>

        <div>
          <div
            className="flex flex-col justify-end items-start"
            style={{
              height: "195px",
              width: "313px",
              background: `
      linear-gradient(to bottom, rgba(239, 148, 172, 0.5), rgba(59, 107, 239, 0.5)),
      url(${data.topNews3.featuredImage.url})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <p className="font-bold bg-gray-400 text-white border px-1">
              {data.topNews3.title}
            </p>
            {data.topNews3.excerpt}
          </div>

          <div
            className="bg-contain bg-center bg-no-repeat NewsBox4 flex flex-col justify-end items-start"
            style={{
              height: "195px",
              width: "313px",
              marginTop: "10px",
              background: `
      linear-gradient(to bottom, rgba(225, 238, 195, 0.5), rgba(240, 80, 83, 0.5)),
      url(${data.topNews4.featuredImage.url})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <p className="font-bold bg-gray-400 text-white border px-1">
              {data.topNews4.title}
            </p>
            {data.topNews4.excerpt}
          </div>
        </div>
      </div>

      {/* /* ----------------------------- Top Section End ----------------------------  */}

      {/* /* -------------------------- Second Section Start --------------------------  */}

      <div
        style={{
          width: "1250px",
          //   height: "450px",
        }}
        className="flex items-center"
      >
        <div className="container flex mt-4 ">
          <div className="mr-4" style={{ width: "24.6%" }}>
            <h1 className="border-black border-y-2 mb-2  ">Recent News</h1>
            {newsposts.map((post, index) => (
              <NewsPostCard key={index} post={post.node} />
            ))}
          </div>

          <div className="mr-4 " style={{ width: "48%" }}>
            <h1 className="border-black border-y-2 mb-2">Popular News</h1>
            <div className="row grid grid-cols-12 gap-2">
              <div
                className="col-span-8 bg-indigo-700 "
                style={{
                  //   height: "400px",
                  //   width: "394px",
                  marginTop: "0.25rem",
                }}
              >
                <div
                  style={{
                    height: "190px",
                    background: "indigo",
                  }}
                >
                  first
                </div>

                <div
                  style={{
                    height: "190px",
                    // width: "395px",
                    marginTop: "0.75rem",
                    background: "pink",
                  }}
                >
                  second
                </div>
              </div>
              <div
                className="col-span-4 bg-indigo-200 "
                style={{
                  marginTop: "0.25rem",
                }}
              >
                <div
                  style={{
                    height: "190px",
                    background: "green",
                  }}
                >
                  third
                </div>

                <div
                  style={{
                    height: "190px",
                    marginTop: "0.75rem",
                    background: "skyblue",
                  }}
                >
                  fourth
                </div>
              </div>
            </div>
          </div>
          <div className="" style={{ width: "24.6%" }}>
            <h1 className="border-black border-y-2 mb-2">Trending News</h1>
            {newsposts.map((post, index) => (
              <NewsPostCard key={index} post={post.node} />
            ))}
          </div>
        </div>
      </div>

      {/* --------------------------- Second Section End ---------------------------  */}

      {/*  --------------------------- Third Section Start --------------------------  */}

      <div
        style={{
          width: "1250px",
          height: "420px",
        }}
        className=" justify-center my-4 bg-gray-200 "
      >
        <h1 className="border-black border-y-2 mb-2 h-min  ">Global News</h1>
        <NewsApp/>
      </div>

      {/* --------------------------- Third Section End -------------------------- */}
    </div>
  );
}

export async function getStaticProps() {
  const newsposts = (await getNewsPosts()) || [];
  return {
    props: { newsposts },
  };
}
