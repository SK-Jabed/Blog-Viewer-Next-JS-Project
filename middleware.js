// import { NextResponse, NextRequest } from "next/server";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// export async function middleware(request: NextRequest) {
//     const {getUser} = getKindeServerSession();
//     const user = getUser();

//     if (!user) {
//         return NextResponse.redirect(new URL("/api/auth/login?post_login_redirect_url=/profile", request.url))
//     }

//     return NextResponse.next();
// }

// export const config = {
//   matcher: "/profile",
// };
