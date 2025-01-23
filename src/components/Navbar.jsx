import React from "react";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";

const Navbar = () => {
  return (
    <nav className="border-b-2 h-[8vh] mt-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <h2 className="font-bold">Logo</h2>
          </Link>
        </div>
        <div className=" flex items-center gap-6">
          <div className="flex items-center">
            <Link href="/">
              <h4 className="mr-4 hover:underline">Home</h4>
            </Link>
            <Link href="/profile">
              <h4 className="hover:underline">Profile</h4>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {/* {isAuthenticated() ? (
          <button onClick={logout} className="hover:underline">
            Logout
          </button>
        ) : (
          <button onClick={login} className="hover:underline">
            Login
          </button>
        )} */}
            <LoginLink postLoginRedirectURL="/profile">
              <button className="btn border-2 px-6 py-2">Login</button>
            </LoginLink>
            <RegisterLink postLoginRedirectURL="/profile">
              <button className="btn border-2 px-6 py-2">Register</button>
            </RegisterLink>
            <LogoutLink>
              <button className="btn border-2 px-6 py-2">Logout</button>
            </LogoutLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
