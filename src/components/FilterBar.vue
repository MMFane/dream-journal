<script setup lang="ts">
const props = defineProps<{ filter: string }>()
const localFilter = props.filter
</script>

<template>
  <v-text-field
    label="filter"
    class="filter-bar"
    v-model="localFilter"
    append-icon="mdi-close"
    prepend-icon="mdi-magnify"
    @input="$emit('update-filter', localFilter)"
  >
  </v-text-field>
</template>

<style lang="css" scoped>
.filter-bar {
  max-width: 500px;
}
</style>
