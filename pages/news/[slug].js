/* eslint-disable */
import Link from "next/link";
import { useRouter } from "next/router";

import { Author, NewsComments, NewsCommentsForm, Loader,NewsPostDetail } from "../../components";
import { AdjacentPosts } from "../../sections";
import { getNewsPosts, getNewsPostDetails } from "../../services";

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const post = await getNewsPostDetails(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default function NewsPostDetailPage({ post }) {
  // Updated component name to avoid recursion

  return (
    <div className="container mx-auto px-10 mb-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8  border-black border-2 p-2 rounded-lg">
          <NewsPostDetail post={post} />
          <Author author={post.author} />
          <NewsCommentsForm slug={post.slug} />
          <NewsComments slug={post.slug} />
          <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div
            className="relative lg:sticky top-8"
            style={{ zIndex: "-1", paddingTop: "10rem" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
