<script setup lang="ts">
import { useToast } from './composables/toast'

const options: { label: string; value: string }[] = []

for (let i = 0; i < 10; i++) {
  options.push({
    label: 'option ' + i,
    value: `${i}`,
  })
}
const bool = ref(false)
const v = ref('value')
</script>

<template>
  <main class="grid gap-4 place-items-center bg-light-1 min-h-screen">
    <form @submit.prevent="" class="flex flex-col rounded-3 p-4 pt-6 gap-8 max-w-300px">
      {{ v }}
      <SInput v-model="v" :readonly="bool" hint="this is a hint" label="username"> </SInput>
      <SButton @click="bool = !bool">button</SButton>
    </form>
  </main>
</template>

<style>
body {
  background: white;
}
</style>
