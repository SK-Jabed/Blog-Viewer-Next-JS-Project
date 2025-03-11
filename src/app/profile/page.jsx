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
          Welcome to your profile,{" "}
          <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
            {user?.given_name || "User"} {user?.family_name || "User"} !
          </span>
        </h1>

        <div className="flex items-center space-x-6 mb-6">
          <img
            src={user?.picture || "/default-avatar.png"}
            alt="User Photo"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              {/* {user?.name || "No name available"} */}
              {user?.given_name || "No name available"}{" "}
              {user?.family_name || "No name available"}
            </h2>
            <p className="text-gray-500 text-base">
              {user?.email || "No email available"}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-700 font-semibold">Full Name:</span>
            <span className="text-gray-500">
              {user?.given_name || "No name available"}{" "}
              {user?.family_name || "No name available"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-semibold">Email:</span>
            <span className="text-gray-500">{user?.email || "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
