/* eslint-disable no-unused-vars */
import React from 'react';
import { useQuery, gql } from '@apollo/client';

function LatestPost({ newspost }) {
  return (
    <div>
      <h1>{newspost.title}</h1>
      <p>{newspost.excerpt}</p>
      <img
        src={newspost.featuredImage.url}
        alt={newspost
          .title}
      />
    </div>
  );
}

export default LatestPost;
