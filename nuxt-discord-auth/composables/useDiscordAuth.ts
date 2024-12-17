import type { SessionData, User } from "~/types";

export default function useDiscordAuth() {
    const session = ref<User | null>(null);

    const signIn = () => {
        window.location.href = "/api/auth/login";
    };

    const signOut = async () => {
        await useFetch("/api/auth/logout");
        session.value = null;
    }

    const getSession = async () => {
        const { data } = await useFetch("/api/auth/session");
        const sessionData = data.value?.session as SessionData | null;
        if (sessionData?.user) {
            sessionData.user.avatar = `https://cdn.discordapp.com/avatars/${sessionData.user.id}/${sessionData.user.avatar}.png`
        }
        session.value = sessionData?.user || null
    }

    return {
        signIn,
        signOut,
        session,
        getSession
    }
}