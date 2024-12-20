import { defineEventHandler, deleteCookie } from "h3";

export default defineEventHandler((event) => {
    deleteCookie(event, 'session', { path: "/" });
    return { success: true }
})