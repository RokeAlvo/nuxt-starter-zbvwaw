<script setup lang="ts">
defineProps<{count: number}>()
</script>

<template>
  <div>
    <h3>Count: {{count}}</h3>
    <slot />
    <div>
      <nuxt-link to="/">index</nuxt-link>
    </div>
  </div>
</template>

<style scoped>

</style>
