<script setup lang="ts">
import DreamsList from '../dreams/DreamsList.vue'
import dreams from '../../data/data.json'
</script>

<template>
  <DreamsList :dreams="dreams" />
</template>
