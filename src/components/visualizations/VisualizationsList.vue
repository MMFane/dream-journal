<script setup lang="ts">
import DreamsTagChart from './charts/DreamsTagChart.vue'
import { Dream } from '../../types/types'

interface VisualizationListProps {
  dreams: Array<Dream>
}

const props = defineProps<VisualizationListProps>()
</script>

<template>
  <h1>Visualizations</h1>
  <DreamsTagChart :dreams="props.dreams" />
  <!-- Put more charts here -->
</template>
