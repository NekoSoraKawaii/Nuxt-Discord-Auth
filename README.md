# 🎮 Nuxt 3 Discord OAuth2 Authentication

This project demonstrates how to implement Discord OAuth2 Authentication in a Nuxt 3 application. It allows users to sign in via Discord, fetch their profile data, and manage authentication sessions seamlessly.

---

## 🚀 Features
- 🔐 Discord OAuth2 Login integration
- 🧩 Session Management using Nuxt composables
- 🚦 Automatic Redirection after login
- 📝 Fetch Discord User Data: ID, username, avatar, email, etc.
- ⚙️ Clean API Routes for login and callback handling

---

## 🛠️ Requirements
Before starting, ensure you have:

- Node.js v18+
- A Discord Developer Account
- A Nuxt 3 project setup

---

## ⚙️ Setup Instructions
### 1. Clone the Repository
```md
git clone https://github.com/NekoSoraKawaii/Nuxt-Discord-Auth.git
cd Nuxt-Discord-Auth
```
### 2. Install Dependencies
```base
bun install
```
### 3. Configure Environment Variables
Create a `.env` file in the root of the project and add your Discord application credentials:
```env
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
DISCORD_REDIRECT_URI=http://localhost:3000/api/auth/callback
JWT_SECRET=mysecret
BASE_URI_API=https://discord.com
```

---

## 📁 Project Structure
```css
/nuxt3-discord-auth
├── server/
│   └── api/
│       └── auth/
│           ├── login.ts       # Redirect to Discord OAuth2
│           ├── callback.ts    # Handle OAuth2 callback and fetch user data
│           ├── logout.ts      # Destroy the user session and log out
│           └── session.ts     # Retrieve the current user session
├── composables/
│   └── useDiscordAuth.ts      # Reusable composable for authentication
├── app.vue                    # Main app entry with login/logout buttons
├── .env                       # Environment variables for credentials
└── README.md                  # Project documentation
```

---

## 📝 License
This project is licensed under the MIT License.