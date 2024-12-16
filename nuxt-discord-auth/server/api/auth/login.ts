import { defineEventHandler, sendRedirect } from "h3";
import { DISCORD_CONFIG } from "~/server/config/auth";

export default defineEventHandler((event) => {
    const scope = encodeURIComponent('identify email');
    const discordAuthUrl = `${process.env.BASE_URI_API}/oauth2/authorize?client_id=${DISCORD_CONFIG.clientId}&redirect_uri=${encodeURIComponent(DISCORD_CONFIG.redirectUri)}&response_type=code&scope=${scope}`

    return sendRedirect(event, discordAuthUrl);
})