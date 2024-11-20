<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/dreams">Dreams</RouterLink>
    <RouterLink to="/tags">Tags</RouterLink>
    <RouterLink to="/visualizations">Visualizations</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
