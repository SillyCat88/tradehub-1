import type { AuthOptions } from 'next-auth';

export const authConfig: AuthOptions = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async signIn({ user }) {
            const isLoggedIn = !!user;

            if (isLoggedIn) {
                return true;
            }
            return false;
        },
    }, 
    providers: [],
};