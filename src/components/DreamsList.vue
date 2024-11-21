<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { normalize } from '../data/utils'

import dreams from '../data/data.json'
import DreamListItem from './DreamListItem.vue'
import FilterBar from './FilterBar.vue'

const dreamsList = reactive(dreams)

const filter = ref('')

function handleUpdateFilter(newValue: string) {
  filter.value = newValue
}

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
  <h1>Dream List</h1>
  <FilterBar
    :filter="filter"
    item-name="dream"
    @update-filter="handleUpdateFilter"
  />
  <v-list>
    <DreamListItem
      v-for="dream in filteredDreams"
      :key="dream.date"
      :dream="dream"
    />
  </v-list>
</template>
