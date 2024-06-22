import { NextAuthOptions } from "next-auth"
import Google from "next-auth/providers/google";


export const NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId:"klasjdfkj",
            clientSecret:"ashdjkfh",
        })
    ],
}
export default NextAuth(NextAuthOptions);