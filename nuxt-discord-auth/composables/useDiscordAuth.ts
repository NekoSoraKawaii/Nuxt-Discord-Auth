import type { SessionData, User } from "~/types";

export default function useDiscordAuth() {
    const session = ref<User | null>(null);
    const status = ref<"loading" | "authorization" | "unauthorization">("loading");

    const signIn = () => {
        status.value = "authorization";
        window.location.href = "/api/auth/login";
    };

    const signOut = async () => {
        await useFetch("/api/auth/logout");
        session.value = null;
        status.value = "unauthorization";
    }

    const getSession = async () => {
        status.value = "loading"
        const { data } = await useFetch("/api/auth/session");
        const sessionData = data.value?.session as SessionData | null;
        if (sessionData?.user) {
            sessionData.user.avatar = `https://cdn.discordapp.com/avatars/${sessionData.user.id}/${sessionData.user.avatar}.png?size=512`
            session.value = sessionData.user;
            status.value = "authorization";
        } else {
            session.value = null;
            status.value = "unauthorization";
        }
    };

    return {
        signIn,
        signOut,
        session,
        status,
        getSession
    }
}