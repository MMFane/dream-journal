<script setup lang="ts">
import TagsList from '../tags/TagsList.vue'
import dreams from '../../data/data.json'
</script>

<template>
  <TagsList :dreams="dreams" />
</template>
