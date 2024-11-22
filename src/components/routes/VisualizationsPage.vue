<script setup lang="ts">
import VisualizationsList from '../visualizations/charts/DreamsTagChart.vue'
import dreams from '../../data/data.json'
</script>

<template>
  <VisualizationsList :dreams="dreams" />
</template>
