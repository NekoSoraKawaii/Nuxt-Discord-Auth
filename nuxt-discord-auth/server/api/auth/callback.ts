import { defineEventHandler, setCookie, getQuery } from "h3";
import jwt from "jsonwebtoken";
import axios from "axios"
import { DISCORD_CONFIG, JWT_SECRET } from "~/server/config/auth";

export default defineEventHandler(async (event) => {
    const { code } = getQuery(event);

    if (!code) {
        throw new Error("Authorization code missing")
    }

    try {
        const tokenResponse = await axios.post(`${process.env.BASE_URI_API}/api/oauth2/token`, new URLSearchParams({
            client_id: DISCORD_CONFIG.clientId,
            client_secret: DISCORD_CONFIG.clientSecret,
            grant_type: "authorization_code",
            code: code as string,
            redirect_uri: DISCORD_CONFIG.redirectUri
        }).toString(), {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        });

        const { access_token } = tokenResponse.data;
        const userResponse = await axios.get(`${process.env.BASE_URI_API}/api/users/@me`, {
            headers: { Authorization: `Bearer ${access_token}` }
        });

        const user = userResponse.data;
        const token = jwt.sign({ user }, JWT_SECRET, { expiresIn: "1h" });
        setCookie(event, "session", token, {
            httpOnly: true,
            maxAge: 3600,
            path: "/"
        });

        return { success: true };
    } catch (error) {
        console.error(error);
        throw new Error("OAuth2 Failed")
    }
})