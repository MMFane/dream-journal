<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import dreams from '../data/data.json'
import { normalizeTag } from '../data/utils'

const tags = reactive([])
const filter = ref('')

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

const filteredTags = computed(() => {
  return tags.filter((tag) => {
    return tag.includes(filter.value)
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
