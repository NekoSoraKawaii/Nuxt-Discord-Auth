import { defineEventHandler, getCookie } from "h3";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "~/server/config/auth";

export default defineEventHandler((event) => {
    const token = getCookie(event, 'session');
    if (!token) return { session: null };

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return { session: decoded };
    } catch (error) {
        return { session: null }
    }
});