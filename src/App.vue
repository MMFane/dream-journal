<script setup lang="ts">
import {
  VApp,
  VMain,
  VLayout,
  VNavigationDrawer,
  VList,
  VListItem
} from 'vuetify/components'
</script>

<template>
  <VApp>
    <VLayout>
      <VNavigationDrawer expand-on-hover rail :mobile="false">
        <VList>
          <VListItem prepend-icon="mdi-weather-night"
            ><RouterLink to="/">Dreams</RouterLink></VListItem
          >
          <VListItem prepend-icon="mdi-tag"
            ><RouterLink to="/tags">Tags</RouterLink></VListItem
          >
          <VListItem prepend-icon="mdi-chart-box-multiple-outline"
            ><RouterLink to="/visualizations"
              >Visualizations</RouterLink
            ></VListItem
          >
        </VList>
      </VNavigationDrawer>
      <VMain>
        <RouterView />
      </VMain>
    </VLayout>
  </VApp>
</template>

<style scoped></style>
