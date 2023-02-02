<script setup lang="ts">
import { ref } from 'vue'
import Button from './components/Button.vue'
import Input from './components/Input.vue'

const val = ref('')
</script>

<template>
  <main class="pt-10rem grid place-items-center gap-4">
    <article class="rounded-3 flex flex-col gap-4 bg-white p-4 pt-6">
      <header>
        <h1 class="text-base font-medium">Set dimensions {{ val }}</h1>
        <h2 class="text-gray-4 text-sm">Lorem, ipsum dolor.</h2>
      </header>
      <Input required v-model="val" label="name" />
      <Input label="email" />
      <footer class="flex items-center justify-end gap-6">
        <Button variant="text">cancel</Button>
        <Button>save</Button>
      </footer>
    </article>
    <Input label="email" />
  </main>
</template>

<style>
body {
  background: #f1f1f1;
}
</style>
