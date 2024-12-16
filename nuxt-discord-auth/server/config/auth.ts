export const DISCORD_CONFIG = {
    clientId: process.env.DISCORD_CLIENT_ID || '',
    clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
    redirectUri: process.env.DISCORD_REDIRECT_URI || 'http://localhost:3000/api/auth/callback'
}

export const JWT_SECRET = process.env.JWT_SECRET || 'mysecret'