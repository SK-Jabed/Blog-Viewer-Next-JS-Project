import Link from "next/link";

export default async function BlogDetails({ params }) {
  const { id } = params;

  // Fetch the blog details based on the ID
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Blog Header */}
        <div className="bg-blue-500 text-white p-6">
          <h1 className="text-3xl font-extrabold">{post.title}</h1>
        </div>

        {/* Blog Content */}
        <div className="p-6">
          <p className="text-gray-800 text-lg mb-4">{post.body}</p>
          <p className="text-gray-500 text-sm">Author ID: {post.userId}</p>
        </div>

        {/* Back Button */}
        <div className="p-6 border-t border-gray-200">
          <Link href="/">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
              Back to Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
