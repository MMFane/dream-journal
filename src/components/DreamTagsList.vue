<script setup lang="ts">
import { Dream } from './types/types'
const props = defineProps<{ dream: Dream }>()
const tagsList = props.dream.tags.split(', ')
</script>

<template>
  <v-chip v-for="tag in tagsList" :key="tag">{{ tag }}</v-chip>
</template>
