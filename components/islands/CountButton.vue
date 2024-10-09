<script setup lang="ts">
defineProps<{title: string}>()
const emit = defineEmits(["click"])
</script>

<template>
  <button type="button" @click="emit('click')">{{title}}</button>
</template>

<style scoped>

</style>
