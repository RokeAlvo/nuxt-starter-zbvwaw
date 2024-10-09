<script setup lang="ts">

import NavBar from "~/components/NavBar.vue";
import {ServerCounter} from "#components";
// import {CountButton} from "#components";

const serverCounterRef = ref(null);
const count = ref(0)

async function forceRefresh() {
  if (!serverCounterRef.value) return;
  await serverCounterRef.value.refresh();
}


</script>

<template>
  <div class="page">
    <h1>about</h1>
    <nav-bar/>
    <section>
      <h2>island</h2>
      <nuxt-island
          name="CountButton"
          ref="serverCounter"
          :props="{title: 'add'}"
          @click="console.log('click')"
      >
        <template #fallback>
          <!-- Content to be rendered before the island loads or on failure -->
          <div>Loading...</div>
        </template>
      </nuxt-island>

    </section>

    <section>
      <h2>server-component</h2>
      <server-counter :count="count">
        <button type="button" @click="count++">+++</button>
      </server-counter>

    </section>

  </div>
</template>

<style scoped>
.page {
  display: grid;
  gap: 20px;
}
section {
  border: 1px solid gray;
  padding: 10px;
}
</style>
