import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function HomePage({ searchParams }) {
  // Fetch all posts from the mock API
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  // Handle "View All" logic using query parameters
  const showAll = searchParams?.view === "all";
  const limitedPosts = showAll ? posts : posts.slice(0, 12);

  return (
    <div className="bg-white min-h-screen pt-24 pb-8 px-4">
      {/* Page Title and Description */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
          Explore Amazing Blogs
        </h2>
        <p className="text-lg text-gray-400 mt-2">
          Dive into a world of insightful blogs crafted for every curious mind.
        </p>
      </div>

      {/* Grid of Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {limitedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-blue-500"
          >
            {/* Title */}
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                {post.title}
              </h2>
            </Link>

            {/* Body Text */}
            <p className="text-gray-600 mt-2">
              {post.body.split(" ").slice(0, 10).join(" ")}...
            </p>

            {/* View More Button */}
            <Link href={`/blog/${post.id}`}>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-200">
                View More
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {!showAll && (
        <div className="text-center mt-8">
          <Link
            href="?view=all"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-blue-500 transition-transform transform hover:scale-105"
          >
            View All
          </Link>
        </div>
      )}
    </div>
  );
}
