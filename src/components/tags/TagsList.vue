<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import {
  VList,
  VListItem,
  VSwitch,
  VBanner,
  VBannerText,
  VExpansionPanel,
  VExpansionPanels,
  VExpansionPanelText
} from 'vuetify/components'
import { normalize } from '../../data/utils'
import FilterBar from '../FilterBar.vue'
import { Dream } from '../../types/types'
import tagGroupsJson from '../../data/tag-groups.json'

interface TagsListProps {
  dreams: Array<Dream>
}

interface TagGroups {
  [key: string]: string[]
}

const props = defineProps<TagsListProps>()

const tags = reactive<Array<string>>([])
const filter = ref('')
const tagGroups: TagGroups = tagGroupsJson
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

const ungroupedTags: string[] = []

// check for missing tags
tags.forEach((tag) => {
  const groups = Object.keys(tagGroups)
  let tagFound = false
  for (let i = 0; i < groups.length; i++) {
    if (tagGroups[groups[i]].includes(tag)) {
      tagFound = true
      break
    }
  }
  if (!tagFound) {
    ungroupedTags.push(tag)
  }
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

const filteredGroupedTags = computed(() => {
  const normalizedFilter = normalize(filter.value)
  const groups = Object.keys(tagGroups)
  let filteredResult: { [key: string]: string[] } = {}
  for (let i = 0; i < groups.length; i++) {
    tagGroups[groups[i]].forEach((tag) => {
      if (tag.includes(normalizedFilter)) {
        filteredResult[groups[i]] = tagGroups[groups[i]]
      }
    })
    if (
      tagGroups[groups[i]].includes(normalizedFilter) || // to do make it so partial matches on tags also works
      groups[i].includes(normalizedFilter)
    ) {
      filteredResult[groups[i]] = tagGroups[groups[i]]
    }
  }
  return filteredResult
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
  <VBanner
    v-if="displayGrouped && ungroupedTags.length"
    bg-color="error"
    icon="mdi-clipboard-alert"
    density="compact"
  >
    <VBannerText>
      Found ungrouped tags:
      <span v-for="(tag, index) in ungroupedTags" :key="tag"
        >{{ tag
        }}<span v-if="index !== ungroupedTags.length - 1">, </span></span
      >
    </VBannerText>
  </VBanner>
  <VExpansionPanels v-if="displayGrouped">
    <VExpansionPanel
      v-for="(group, groupName) in filteredGroupedTags"
      :key="groupName"
      :title="groupName.toString()"
    >
      <VExpansionPanelText>
        <VList>
          <VListItem v-for="tag in group" :key="tag">
            {{ tag }}
          </VListItem>
        </VList>
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
  <VList v-else>
    <VListItem v-for="tag in filteredTags" :key="tag">
      {{ tag }}
    </VListItem>
  </VList>
</template>
