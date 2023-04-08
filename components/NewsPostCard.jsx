/* eslint-disable no-unused-vars */
import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

function NewsPostCard({ post }) {
  return (
    <div>
      {/*
  <div className="" style={{ display: "flex", justifyContent: "center" }}>
       <div
        className="NewsBox1"
        style={{
          height: "400px",
          width: "313px",
          float: "left",
          backgroundSize: "cover",
        }}
      >
        <img
          src={post.featuredImage.url}
          alt=""
          className=""
          style={{
            opacity: 0.7,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            // zIndex: 0,
          }}
        />
        <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold text-white">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
      </div> */}
      <div>
        <div className="flex my-3 h-20 bg-white" style={{}}>
          <img
            src={post.featuredImage.url}
            alt=""
            className="h-20 w-20 object-cover  shadow-lg "
          />
          <div className=" px-4">
            <h1 className="text-base  "><Link href={`/newspost/${post.slug}`}>{post.title}</Link>
            </h1>
            <h1 className="text-xs bold ">{post.excerpt}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPostCard;
