<script setup lang="ts">
import { ref } from 'vue'

const options = [
  { label: 'vue', value: 1 },
  { label: 'react', value: 2 },
  { label: 'solid', value: 3 },
  { label: 'next', value: 4 },
  { label: 'solidStart', value: 4 },
  { label: 'new', value: 4 },
  { label: 'vim', value: 4 },
]

const v = ref()
</script>

<template>
  <main class="pt-10rem grid place-items-center gap-4">
    <article class="rounded-3 flex flex-col gap-4 bg-white p-4 pt-6">
      value: {{ v || '' }}
      <SSelect v-model="v" class="w-300px" :options="options">select</SSelect>
    </article>
  </main>
</template>

<style>
body {
  background: #fff;
}
</style>
