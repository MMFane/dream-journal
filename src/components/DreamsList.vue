<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { normalize } from '../data/utils'
import { eventBus } from '../utils/event-bus'

onMounted(() => eventBus.on('tagClicked', handleChipClicked))
onUnmounted(() => eventBus.off('tagClicked', handleChipClicked))

import dreams from '../data/data.json'
import DreamsListItem from './DreamsListItem.vue'
import FilterBar from './FilterBar.vue'

const dreamsList = reactive(dreams)

const filter = ref('')

const handleChipClicked = (tag: string) => {
  filter.value = tag
  handleUpdateFilter(tag)
}

function handleUpdateFilter(newValue: string) {
  filter.value = newValue
}

const filteredDreams = computed(() => {
  return dreamsList.filter((dream) => {
    const noramlizedDescription = normalize(dream.description)
    const noramlizedTags = normalize(dream.tags)
    const normalizedCircumstances = normalize(dream.circumstances)
    const normalizedFilter = normalize(filter.value)
    return (
      noramlizedDescription.includes(normalizedFilter) ||
      noramlizedTags.includes(normalizedFilter) ||
      normalizedCircumstances.includes(normalizedFilter)
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
    <DreamsListItem
      v-for="dream in filteredDreams"
      :key="dream.date"
      :dream="dream"
      :chip-clicked="handleChipClicked"
    />
  </v-list>
</template>
