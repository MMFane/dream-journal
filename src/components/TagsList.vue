<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import dreams from '../data/data.json'
import { normalize } from '../data/utils'

const tags = reactive([])
const filter = ref('')

dreams.forEach((dream) => {
  const dreamTags = dream.tags.split(', ')
  dreamTags.forEach((tag) => {
    const normalizedTag = normalize(tag)
    if (!tags.includes(normalizedTag)) {
      tags.push(normalizedTag)
    }
  })
})

tags.sort()

const filteredTags = computed(() => {
  const normalizedFilter = normalize(filter.value)
  return tags.filter((tag) => {
    return tag.includes(normalizedFilter)
  })
})
</script>

<template>
  <h2>Tags List</h2>
  <v-text-field
    v-model="filter"
    append-icon="mdi-close"
    prepend-icon="mdi-magnify"
  >
  </v-text-field>
  <li v-for="tag in filteredTags" :key="tag">
    {{ tag }}
  </li>
</template>
