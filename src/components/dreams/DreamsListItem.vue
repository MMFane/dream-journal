<script setup lang="ts">
import ChipList from '../ChipList.vue'
import { Dream } from '../../types/types'
import { formatSentence } from '../../data/utils'

const props = defineProps<{ dream: Dream; filter: string }>()

const formattedDate = new Date(props.dream.date).toDateString()
const formattedDescription = formatSentence(props.dream.description)
</script>

<template>
  <v-list-item class="dream">
    <h2 class="dream-heading">{{ formattedDate }}</h2>
    <p>{{ formattedDescription }}</p>
    <ChipList :item-list="dream.tags" :filter="filter" />
    <ChipList
      v-if="dream.circumstances.length"
      :item-list="dream.circumstances"
      :filter="filter"
      variant="text"
    />
    <v-divider />
  </v-list-item>
</template>

<style lang="css" scoped>
.dream-heading {
  margin: 0.5rem 0;
}
</style>
