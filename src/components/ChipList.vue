<script setup lang="ts">
import { VChip } from 'vuetify/components'
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
  <v-chip-group selected-class="" :column="true">
    <v-chip
      v-for="item in displayList"
      :key="item"
      :variant="item == filter ? 'elevated' : variant"
      @click="handleChipClicked(item)"
      >{{ item }}</v-chip
    >
  </v-chip-group>
</template>

<style lang="css" scoped>
.v-chip--selected {
  background-color: purple;
}
</style>
