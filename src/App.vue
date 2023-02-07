<script setup lang="ts">
import SButton from './components/SButton.vue'
import { useToast } from '@/composables/toast'

</script>

<template>
  <main class="pt-10rem grid place-items-center gap-4">
    <article class="rounded-3 flex flex-col gap-4 bg-white p-4 pt-6">
      <SButton @click="useToast('info', 'hello world')">
        button
      </SButton>
    </article>
  </main>
</template>

<style>
body {
  background: #fff;
}
</style>
