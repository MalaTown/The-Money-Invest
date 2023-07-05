/* eslint-disable */

import React, { useState, useEffect } from "react";
import { getRecentPosts } from "../services/index";
import Link from "next/link";

const HomePage = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const posts = await getRecentPosts();
        setRecentPosts(posts);
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-2xl border-b-4 border-black mb-2 ">
        Recent Blogs
      </h1>
      <div className="sm:flex sm:flex-wrap md:flex-wrap sm:justify-between lg:flex-nowrap xl:flex-nowrap place-content-center">
        {recentPosts.map((post) => (
          <div
            key={post.slug}
            className="recent-post border-2 border-black p-2 rounded-lg w-full lg:w-2/6 lg:mx-4 sm:place-content-center h-auto"
          >
            <img src={post.featuredImage.url} alt={post.title} className=" " />
            <div className="flex flex-col items-center text-center mt-2 h-1/2">
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
              <Link href={`/post/${post.slug}`}>
                <span className="text-sm border-solid border-2 border-black rounded-full bg-darkblue text-white hover:bg-white hover:text-black w-2/4 transition duration-700 p-0.5 px-2 mt-2">
                  Read More...
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;