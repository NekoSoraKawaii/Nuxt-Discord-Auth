<template>
  <div>
    <h1>Nuxt 3 Discord Auth</h1>

    <div v-if="session">
      <p>Welcome, {{ session.username }}</p>
      <button type="button" @click="signOut">Sign Out</button>
    </div>
    <div v-else>
      <button @click="signIn">Sign In</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useDiscordAuth from './composables/useDiscordAuth';

const { signIn, signOut, session, getSession } = useDiscordAuth();

onMounted(() => {
  getSession();
})
</script>