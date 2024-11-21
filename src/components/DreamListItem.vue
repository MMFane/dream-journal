<script setup lang="ts">
import ChipList from './ChipList.vue'
import { Dream } from './types/types'

const props = defineProps<{ dream: Dream }>()

const formattedDate = new Date(props.dream.date).toDateString()
</script>

<template>
  <v-list-item class="dream">
    <h2 class="dream-heading">{{ formattedDate }}</h2>
    <p>{{ props.dream.description }}</p>
    <ChipList :item-list="dream.tags" />
    <ChipList
      v-if="dream.circumstances.length"
      :item-list="dream.circumstances"
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
