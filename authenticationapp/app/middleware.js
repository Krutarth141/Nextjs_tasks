import { withAuth } from "next-auth/middleware";

export default withAuth({
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login", // Where to redirect if the user is not authenticated
    },
});

export const config = {
    matcher: ["/dashboard"],
};
