import Link from "next/link";

export default async function BlogDetails({ params }) {
  const { id } = params;

  // Fetch the blog details based on the ID
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-16 px-4">
      <div className="max-w-3xl w-full bg-gray-50 shadow-lg rounded-lg overflow-hidden border border-gray-200">
        {/* Blog Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <p className="text-sm text-gray-100">Article ID: #{id}</p>
        </div>

        {/* Blog Content */}
        <div className="p-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {post.body}
          </p>
          <p className="text-sm text-gray-500 font-medium">
            Written by Author ID:{" "}
            <span className="text-blue-500">{post.userId}</span>
          </p>
        </div>

        {/* Back Button */}
        <div className="p-6 bg-gray-100 border-t border-gray-200 flex justify-center">
          <Link href="/">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200">
              Back to Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
