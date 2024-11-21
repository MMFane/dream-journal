<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import dreams from '../../data/data.json'
import { normalize } from '../../data/utils'
import FilterBar from '../FilterBar.vue'
import { Dream } from '../../types/types'

const tags = reactive<Array<string>>([])
const filter = ref('')

dreams.forEach((dream: Dream) => {
  const dreamTags = dream.tags.split(', ')
  dreamTags.forEach((tag) => {
    const normalizedTag = normalize(tag)
    if (!tags.includes(normalizedTag)) {
      tags.push(normalizedTag)
    }
  })
})

tags.sort()

function handleUpdateFilter(newValue: string) {
  filter.value = newValue
}

const filteredTags = computed(() => {
  const normalizedFilter = normalize(filter.value)
  return tags.filter((tag) => {
    return tag.includes(normalizedFilter)
  })
})
</script>

<template>
  <h1>Tags List</h1>
  <FilterBar
    :filter="filter"
    item-name="tag"
    @update-filter="handleUpdateFilter"
  />
  <li v-for="tag in filteredTags" :key="tag">
    {{ tag }}
  </li>
</template>
