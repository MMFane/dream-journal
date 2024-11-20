<script setup lang="ts">
import dreams from '../data/data.json'
</script>

<template>
  <h2>Dream List</h2>
  <li v-for="dream in dreams" :key="dream.date">
    {{ dream.date }}: {{ dream.description }}
  </li>
</template>
