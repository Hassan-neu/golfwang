import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/signin",
        error: "/error",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
};
