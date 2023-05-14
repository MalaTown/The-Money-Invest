/* eslint-disable */
import React from "react";
import Link from "next/link";


function NewsPostCard({ post }) {
  return (
    <div>
      <div>
        <div className="flex my-3 h-fit bg-white" style={{}}>
          <img
            src={post.featuredImage.url}
            alt=""
            className="h-20 w-20 object-cover  shadow-lg "
          />
          <div className=" px-4">
            <h1 className="text-base  ">
              <Link href={`/newspost/${post.slug}`}>{post.title}</Link>
            </h1>
            <h1 className="text-xs bold ">{post.excerpt}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPostCard;
