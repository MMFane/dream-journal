<script setup lang="ts"></script>

<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail :mobile="false">
        <v-list>
          <v-list-item prepend-icon="mdi-weather-night"
            ><RouterLink to="/">Dreams</RouterLink></v-list-item
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
  </v-app>
</template>

<style scoped></style>
