<script setup lang="ts">
import dreams from '../data/data.json'
import { normalizeTag } from '../data/utils'

const tags = []

dreams.forEach((dream) => {
  const dreamTags = dream.tags.split(', ')
  dreamTags.forEach((tag) => {
    const normalizedtag = normalizeTag(tag)
    if (!tags.includes(normalizedtag)) {
      tags.push(normalizedtag)
    }
  })
})

tags.sort()

// implement filtering
</script>

<template>
  <h2>Tags List</h2>
  <v-input
    :messages="['Messages']"
    append-icon="mdi-close"
    prepend-icon="mdi-magnify"
  >
    Default Slot
  </v-input>
  <li v-for="tag in tags" :key="tag">
    {{ tag }}
  </li>
</template>
