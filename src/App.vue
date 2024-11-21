<script setup lang="ts"></script>

<template>
  <v-layout>
    <v-navigation-drawer expand-on-hover rail :mobile="false">
      <v-list>
        <v-list-item prepend-icon="mdi-home"
          ><RouterLink to="/">Home</RouterLink></v-list-item
        >
        <v-list-item prepend-icon="mdi-weather-night"
          ><RouterLink to="/dreams">Dreams</RouterLink></v-list-item
        >
        <v-list-item prepend-icon="mdi-tag"
          ><RouterLink to="/tags">Tags</RouterLink></v-list-item
        >
        <v-list-item prepend-icon="mdi-chart-box-multiple-outline"
          ><RouterLink to="/visualizations"
            >Visualizations</RouterLink
          ></v-list-item
        >
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style scoped></style>
