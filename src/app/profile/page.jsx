// import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
"use client"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();

//   if (!isAuthenticated()) {
//     login();
//     return null;
//   }
// const { getUser } = getKindeServerSession();
// const user = getUser();

// console.log(user);

if (isLoading) {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h2 className="text-4xl font-semibold">Loading...</h2>
    </div>
  )
}

if (!isAuthenticated) {
  redirect("/api/auth/login")
}

  return (
    <div>
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