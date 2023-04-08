// import React from 'react';
// import Link from 'next/link';
// import { getFirstNewsPosts } from '../services';

function FirstNewsPost() {
  // const [loading, setLoading] = useState(true);
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     const postsData = await getFirstNewsPosts();
  //     setPosts(postsData);
  //     setLoading(false);
  //   }
  //   fetchPosts();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!posts || !posts.length) {
  //   return <div>No news posts found</div>;
  // }

  return (
    <div>
      {/* {posts.map((post) => (
        <div className="flex my-3 h-20 shadow-lg bg-slate-600" key={post.slug}>
          {post.featuredImage && post.featuredImage.url && (
            <img
              src={post.featuredImage.url}
              alt=""
              className="h-20 w-20 object-cover shadow-lg"
            />
          )}
          <div className="px-4">
            <h1 className="text-base">
              <Link href={`/newspost/${post.slug}`}>{post.title}</Link>
            </h1>
            <h1 className="text-xs font-bold">{post.excerpt}</h1>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default FirstNewsPost;
