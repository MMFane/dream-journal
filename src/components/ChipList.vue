<script setup lang="ts">
import { VChip } from 'vuetify/components'
import { eventBus } from '../utils/event-bus'

const handleChipClicked = (tag: string) => {
  eventBus.emit('tagClicked', tag)
}

interface ChipListProps {
  itemList: string
  variant?: VChip['variant']
}
const props = defineProps<ChipListProps>()
const displayList = props.itemList.split(', ')
</script>

<template>
  <div class="chipList">
    <v-chip
      v-for="item in displayList"
      :key="item"
      :variant="variant"
      @click="handleChipClicked(item)"
      >{{ item }}</v-chip
    >
  </div>
</template>

<style lang="css" scoped>
.chipList {
  padding-bottom: 0.5rem;
}
</style>
