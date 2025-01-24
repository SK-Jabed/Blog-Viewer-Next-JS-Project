
// "use client"
// import LoadingSpinner from "@/components/LoadingSpinner";
// import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
// import { redirect } from "next/navigation";

// const ProfilePage = () => {
//   const { isAuthenticated, isLoading } = useKindeBrowserClient();

// if (isLoading) {
//   return (
//     <LoadingSpinner />
//   )
// }

// if (!isAuthenticated) {
//   redirect("/api/auth/login")
// }

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center py-16 px-4">
//       <h1 className="text-xl font-bold">Welcome to your profile!</h1>
//       <button
//         // onClick={logout}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }


// export default ProfilePage;



"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const { isAuthenticated, isLoading, user } = useKindeBrowserClient();
  console.log(user);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    redirect("/api/auth/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl border w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Welcome to your profile, {user?.given_name || "User"}{" "}
          {user?.family_name || "User"} !
        </h1>
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={user?.picture || "/default-avatar.png"}
            alt="User Photo"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-medium text-gray-800">
              {/* {user?.name || "No name available"} */}
              {user?.given_name || "No name available"}{" "}
              {user?.family_name || "No name available"}
            </h2>
            <p className="text-gray-600">
              {user?.email || "No email available"}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Full Name:</span>
            <span className="text-gray-600">
              {user?.given_name || "No name available"}{" "}
              {user?.family_name || "No name available"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Email:</span>
            <span className="text-gray-600">{user?.email || "N/A"}</span>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            // onClick={logout}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
