<script setup lang="ts">
import { ref, watch } from 'vue'
interface FilterBarProps {
  filter: string
  itemName: string
}
const props = defineProps<FilterBarProps>()
const localFilter = ref(props.filter)

watch(
  () => props.filter,
  (newValue: string) => {
    localFilter.value = newValue
  }
)
</script>

<template>
  <v-text-field
    :label="`filter ${itemName}s`"
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
