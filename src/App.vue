<script setup lang="ts">
import Button from './components/Button.vue'
</script>

<template>
  <main class="pt-10rem grid place-items-center gap-4">
    <article class="rounded-3 flex flex-col gap-4 bg-white p-4 pt-6">
      <header>
        <h1 class="text-base font-medium">Set dimensions</h1>
        <h2 class="text-gray-4 text-sm">Lorem, ipsum dolor.</h2>
      </header>
      <p class="max-w-40ch text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, ad.</p>
      <footer class="flex items-center justify-end gap-2">
        <Button variant="text">cancel</Button>
        <Button>save</Button>
      </footer>
    </article>
  </main>
</template>

<style>
body {
  background: #f1f1f1;
}
</style>
