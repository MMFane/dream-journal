<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { normalize } from '../data/utils'

import dreams from '../data/data.json'
import DreamListItem from './DreamListItem.vue'

const dreamsList = reactive(dreams)

const filter = ref('')

const filteredDreams = computed(() => {
  return dreamsList.filter((dream) => {
    const noramlizedDescription = normalize(dream.description)
    const noramlizedTags = normalize(dream.tags)
    const normalizedFilter = normalize(filter.value)
    return (
      noramlizedDescription.includes(normalizedFilter) ||
      noramlizedTags.includes(normalizedFilter)
    )
  })
})
</script>

<template>
  <h2>Dream List</h2>
  <v-text-field
    v-model="filter"
    append-icon="mdi-close"
    prepend-icon="mdi-magnify"
  >
  </v-text-field>
  <v-list lines="one">
    <DreamListItem
      v-for="dream in filteredDreams"
      :key="dream.date"
      :dream="dream"
    />
  </v-list>
</template>
