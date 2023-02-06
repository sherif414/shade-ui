<script setup lang="ts">
import { ref } from 'vue'
import Button from './components/Button.vue'
import IconAdd from './components/icons/IconAdd.vue'
import ILoading from './components/icons/ILoading.vue'
import Input from './components/Input.vue'
import { useToast } from '@/composables/toast'

const val = ref('')
const loading = ref(false)
</script>

<template>
  <main class="pt-10rem grid place-items-center gap-4">
    <article class="rounded-3 flex flex-col gap-4 bg-white p-4 pt-6">
      <Button v-on:click="useToast('error', 'hello world')">button</Button>
    </article>
  </main>
</template>

<style>
body {
  background: #fff;
}
</style>
