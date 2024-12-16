export interface User {
    id: string;
    username: string;
    email?: string;
}

export interface SessionData {
    user?: User | null;
}