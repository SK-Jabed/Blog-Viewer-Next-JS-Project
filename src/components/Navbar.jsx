// import React from "react";
// import Link from "next/link";
// import {
//   RegisterLink,
//   LoginLink,
//   LogoutLink,
// } from "@kinde-oss/kinde-auth-nextjs/components";
// // import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";

// const Navbar = () => {
//   return (
//     <nav className="border-b-2 h-[8vh] mt-4">
//       <div className="container mx-auto flex items-center justify-between">
//         <div>
//           <Link href="/">
//             <h2 className="font-bold">Blog Viewer</h2>
//           </Link>
//         </div>
//         <div className=" flex items-center gap-6">
//           <div className="flex items-center">
//             <Link href="/">
//               <h4 className="mr-4 hover:underline">Home</h4>
//             </Link>
//             <Link href="/profile">
//               <h4 className="hover:underline">Profile</h4>
//             </Link>
//           </div>
//           <div className="flex items-center gap-2">

//             <LoginLink postLoginRedirectURL="/profile">
//               <button className="btn border-2 px-6 py-2">Login</button>
//             </LoginLink>
//             <RegisterLink postLoginRedirectURL="/profile">
//               <button className="btn border-2 px-6 py-2">Register</button>
//             </RegisterLink>
//             <LogoutLink>
//               <button className="btn border-2 px-6 py-2">Logout</button>
//             </LogoutLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
  useKindeAuth,
} from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  const { isAuthenticated, user } = useKindeAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-[70px]">
        {/* Logo / Project Name */}
        <Link href="/" className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-gray-800">
            Blog<span className="text-cyan-500">Viewer</span>
          </h2>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-800 hover:text-cyan-500">
            Home
          </Link>
          <Link href="/profile" className="text-gray-800 hover:text-cyan-500">
            Profile
          </Link>
          {!isAuthenticated && (
            <>
              <LoginLink postLoginRedirectURL="/profile">
                <button className="rounded-md bg-teal-500 px-4 py-2 text-white hover:bg-teal-700">
                  Login
                </button>
              </LoginLink>
              <RegisterLink postLoginRedirectURL="/profile">
                <button className="rounded-md bg-gray-100 px-4 py-2 text-teal-600 hover:bg-teal-500 hover:text-white">
                  Register
                </button>
              </RegisterLink>
            </>
          )}
          {isAuthenticated && (
            <LogoutLink>
              <button className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-700">
                Logout
              </button>
            </LogoutLink>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Home
          </Link>
          <Link
            href="/profile"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Profile
          </Link>
          {!isAuthenticated && (
            <>
              <LoginLink postLoginRedirectURL="/profile">
                <button className="block w-full text-left px-4 py-2 bg-teal-500 text-white hover:bg-teal-700">
                  Login
                </button>
              </LoginLink>
              <RegisterLink postLoginRedirectURL="/profile">
                <button className="block w-full text-left px-4 py-2 bg-sky-500 text-white hover:bg-sky-700 hover:text-white">
                  Register
                </button>
              </RegisterLink>
            </>
          )}
          {isAuthenticated && (
            <LogoutLink>
              <button className="block w-full text-left px-4 py-2 bg-red-500 text-white hover:bg-red-700">
                Logout
              </button>
            </LogoutLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
