<script setup lang="ts">
import dreams from '../data/data.json'
import DreamListItem from './DreamListItem.vue'
</script>

<template>
  <h2>Dream List</h2>
  <v-list lines="one">
    <DreamListItem v-for="dream in dreams" :key="dream.date" :dream="dream" />
  </v-list>
</template>
