<script setup lang="ts">
import dreams from "../data/data.json"
</script>

<template>
    <h1>Dream List</h1>
    <li v-for="dream in dreams">{{ dream.date }}: {{ dream.description }}</li>
</template>