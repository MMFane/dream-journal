<script setup lang="ts">
import DreamTagsList from './DreamTagsList.vue'
import { Dream } from './types/types'

defineProps<{ dream: Dream }>()
</script>

<template>
  <v-list-item :title="dream.date" :subtitle="dream.description">
    <DreamTagsList :dream="dream" />
  </v-list-item>
</template>

<style lang="css" scoped></style>
