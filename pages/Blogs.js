/* eslint-disable*/
import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, BlogHeader } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto mb-8 w-4/5 ">
      <title>Financial Blogs</title>
      <BlogHeader />
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1 ">
          <div className="lg:sticky top-40 bottom-0" style={{ zIndex: "-1" }}>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

