<script setup lang="ts">
import { VChip } from 'vuetify/components'
interface ChipListProps {
  itemList: string
  variant?: VChip['variant']
}
const props = defineProps<ChipListProps>()
const displayList = props.itemList.split(', ')
</script>

<template>
  <div class="chipList">
    <v-chip v-for="item in displayList" :key="item" :variant="variant">{{
      item
    }}</v-chip>
  </div>
</template>

<style lang="css" scoped>
.chipList {
  padding-bottom: 0.5rem;
}
</style>
