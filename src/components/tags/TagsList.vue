<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { VList, VListItem, VSwitch } from 'vuetify/components'
import { normalize } from '../../data/utils'
import FilterBar from '../FilterBar.vue'
import { Dream } from '../../types/types'
import tagGroups from '../../data/tag-groups.json'

interface TagsListProps {
  dreams: Array<Dream>
}

const props = defineProps<TagsListProps>()

const tags = reactive<Array<string>>([])
const filter = ref('')
const displayGrouped = ref(false)

props.dreams.forEach((dream: Dream) => {
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
  <VSwitch label="Group Tags" v-model="displayGrouped"></VSwitch>
  <VList v-if="displayGrouped">
    <VListItem v-for="(group, groupName) in tagGroups" :key="groupName">
      <VList>
        <h2>{{ groupName }}</h2>
        <VListItem v-for="tag in group" :key="tag">
          {{ tag }}
        </VListItem>
      </VList>
    </VListItem>
  </VList>
  <VList v-else>
    <VListItem v-for="tag in filteredTags" :key="tag">
      {{ tag }}
    </VListItem>
  </VList>
</template>
