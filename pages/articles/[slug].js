/* eslint-disable */
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Author,
  ArticlesDetails,
} from "../../components";
import { GetArticleDetails } from "../../services";
import ArticleDetails from "../../components/ArticleDetails";

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const post = await GetArticleDetails(slug);

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

export default function ArticlesDetail ({ post }) {

  return (
    <div className="container mx-auto px-10 mb-8 center ">
      <div className="grid grid-cols-1 gap-12">
        <div className="col-span-1 lg:col-span-8  border-black border-2 p-2 rounded-lg">
          <ArticleDetails post={post} />
          <Author author={post.author} />
        </div>
      </div>
    </div>
  );
}
