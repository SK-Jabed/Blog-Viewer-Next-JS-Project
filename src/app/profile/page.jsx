
"use client"
import LoadingSpinner from "@/components/LoadingSpinner";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();

if (isLoading) {
  return (
    <LoadingSpinner />
  )
}

if (!isAuthenticated) {
  redirect("/api/auth/login")
}

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-16 px-4">
      <h1 className="text-xl font-bold">Welcome to your profile!</h1>
      <button
        // onClick={logout}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}


export default ProfilePage;