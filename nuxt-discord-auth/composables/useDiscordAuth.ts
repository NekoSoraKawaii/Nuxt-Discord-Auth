import type { SessionData, User } from "~/types";

export default function useDiscordAuth() {
    const session = ref<User | null>(null);

    const signIn = () => {
        window.location.href = "/api/auth/login";
    };

    const getSession = async () => {
        const { data } = await useFetch("/api/auth/session");
        const sessionData = data.value?.session as SessionData | null;
        session.value = sessionData?.user || null
    }

    return {
        signIn,
        session,
        getSession
    }
}