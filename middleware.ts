import {withAuth} from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const confiq = {
  matcher: ["/users/:path*", "/conversations/:path*"],
};
