// import Link from "next/link";

// export default async function HomePage() {
//   // Fetch all posts from the mock API
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await response.json();

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id} className="mb-2">
//             <Link href={`/blog/${post.id}`}>
//               <h2 className="text-blue-500 hover:underline">{post.title}</h2>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



import Link from "next/link";

export default async function HomePage() {
  // Fetch all posts from the mock API
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  // Limit to 12 posts
  const limitedPosts = posts.slice(0, 12);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      {/* Page Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Explore Amazing Blogs
        </h1>
        <p className="text-lg text-gray-600">
          Discover insightful articles and posts crafted just for you.
        </p>
      </div>

      {/* Grid of Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {limitedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Title */}
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-200 cursor-pointer">
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
    </div>
  );
}
