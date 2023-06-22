/* eslint-disable */
import React from "react";
import Link from "next/link";

const NewsPostCard = ({ post }) => {
  return (
    <div className="flex my-3 h-fit border-black border-2 p-2 bg-white">
      {post.featuredImage && (
        <img
          src={post.featuredImage.url}
          alt=""
          className="h-20 w-20 object-cover shadow-lg border-black border-2 rounded-lg"
        />
      )}
      <div className="ml-4">
        <h3 className="font-semibold">
          <Link href={`/news/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-sm">
          <Link href={`/news/${post.slug}`}>{post.excerpt}</Link>
        </p>
      </div>
    </div>
  );
};

export default NewsPostCard;
