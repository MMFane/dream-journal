<script setup lang="ts">
import BarChart from './BarChart.vue'
import { TagCount } from '../../../types/types'
import { normalize } from '../../../data/utils'
import { Dream } from '../../../types/types'

interface DreamsTagChartProps {
  dreams: Array<Dream>
}

const props = defineProps<DreamsTagChartProps>()

const tagCounts: { [tagName: string]: number } = {}
props.dreams.forEach((dream) => {
  const tags = dream.tags
  const tagsArray = tags?.split(', ')
  tagsArray?.forEach((tag) => {
    const normalizedTag = normalize(tag)
    if (!Object.keys(tagCounts).includes(normalizedTag)) {
      tagCounts[normalizedTag] = 1
    } else {
      const oldCount = tagCounts[normalizedTag]
      tagCounts[normalizedTag] = oldCount + 1
    }
  })
})

// can we do this more efficiently, or in one go through the array?
const tagCountsArray: Array<TagCount> = []
for (let tag in tagCounts) {
  tagCountsArray.push({ name: tag, value: tagCounts[tag] })
}
tagCountsArray.sort((a: TagCount, b: TagCount) => {
  if (a.value > b.value) {
    return -1
  } else if (a.value < b.value) {
    return 1
  } else return 0
})
console.log(tagCountsArray)
</script>

<template>
  <h2>Dreams Tag Chart</h2>
  <BarChart :data="tagCountsArray" />
</template>
