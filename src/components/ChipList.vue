<script setup lang="ts">
import { VChipGroup, VChip } from 'vuetify/components'
import { eventBus } from '../utils/event-bus'

const handleChipClicked = (tag: string) => {
  eventBus.emit('tagClicked', tag)
}

interface ChipListProps {
  filter: string
  itemList: string
  variant?: VChip['variant']
}
const props = defineProps<ChipListProps>()
const displayList = props.itemList.split(', ')
</script>

<template>
  <VChipGroup selected-class="" :column="true">
    <VChip
      v-for="item in displayList"
      :key="item"
      :variant="item == filter ? 'elevated' : variant"
      @click="handleChipClicked(item)"
      >{{ item }}</VChip
    >
  </VChipGroup>
</template>

<style lang="css" scoped>
.v-chip--selected {
  background-color: purple;
}
</style>
