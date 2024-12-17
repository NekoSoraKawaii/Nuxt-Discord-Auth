<template>
    <div class="h-screen bg-neutral-900 text-white">
        <div class="h-full flex flex-col items-center justify-center text-center">
            <div v-if="session" class="-mt-24">
                <img :src="session.avatar" :alt="session.username" width="200" height="200" class="rounded-xl mx-auto"
                    style="border: 2px solid transparent; background-image: linear-gradient(to right, #00C58E, #7C3AED); background-origin: border-box;" />
                <h2 class="mt-5 font-semibold text-2xl">Welcome, {{ session.username }}</h2>
                <h3 class="mt-2 font-medium text-sm mb-4">Name, {{ session.global_name }}</h3>
                <div class="font-semibold rounded-lg p-2 px-8 bg-gradient-to-r from-[#00C58E] to-[#7C3AED]">
                    <button type="button" @click="signOut">Sign Out</button>
                </div>
            </div>
            <div v-else class="font-bold mb-5">
                <h3
                    class="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00C58E] to-[#7C3AED] mb-2">
                    Nuxt 3 -
                    Discord Auth</h3>
                <p class="mb-5 text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#00C58E] to-[#35495E]">This
                    project demonstrates how to implement Discord OAuth2
                    Authentication in a Nuxt 3 application. <br /> It allows users to sign in via Discord, fetch their
                    profile data, and manage authentication sessions seamlessly.</p>

                <div class="font-semibold rounded-lg p-2 px-8 bg-gradient-to-r from-[#00C58E] to-[#35495E]">
                    <button type="button" @click="signIn">Sign In</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { signIn, signOut, session, getSession } = useDiscordAuth();

onMounted(() => {
    getSession();
})
</script>