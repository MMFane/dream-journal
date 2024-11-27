<script setup lang="ts">
import ChipList from '../ChipList.vue'
import { VListItem, VDivider } from 'vuetify/components'
import { Dream } from '../../types/types'
import { formatSentence } from '../../data/utils'

interface DreamsListItemProps {
  dream: Dream
  filter: string
}

const props = defineProps<DreamsListItemProps>()

const formattedDate = new Date(props.dream.date).toDateString()
const formattedDescription = formatSentence(props.dream.description)
</script>

<template>
  <VListItem class="dream">
    <h2 class="dream-heading">{{ formattedDate }}</h2>
    <p>{{ formattedDescription }}</p>
    <ChipList :item-list="dream.tags" :filter="filter" />
    <ChipList
      v-if="dream.circumstances.length"
      :item-list="dream.circumstances"
      :filter="filter"
      variant="text"
    />
    <VDivider />
  </VListItem>
</template>

<style lang="css" scoped>
.dream-heading {
  margin: 0.5rem 0;
}
</style>
