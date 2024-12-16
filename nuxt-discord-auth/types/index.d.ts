export interface User {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: string | null;
    accent_color: number | null;
    global_name: string;
    avatar_decoration_data: string | null;
    banner_color: string | null;
    clan: string | null;
    primary_guild: string | null;
    mfa_enabled: boolean;
    locale: string;
    premium_type: number;
    email: string;
    verified: boolean;
}

export interface SessionData {
    user?: User | null;
}