import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
    return {
        message: "session auth"
    }
})