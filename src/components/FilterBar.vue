<script setup lang="ts">
import { ref, watch } from 'vue'
import { VTextField } from 'vuetify/components'
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
  <VTextField
    :label="`filter ${itemName}s`"
    class="filter-bar"
    v-model="localFilter"
    prepend-icon="mdi-magnify"
    @input="$emit('update-filter', localFilter)"
  >
  </VTextField>
</template>

<style lang="css" scoped>
.filter-bar {
  max-width: 500px;
}
</style>
