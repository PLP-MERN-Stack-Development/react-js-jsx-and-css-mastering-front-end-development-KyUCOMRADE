import { useEffect, useState } from "react";
import { fetchPosts } from "../api/fetchData";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map(post => (
        <div key={post.id} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
          <h2 className="font-bold mb-2">{post.title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
