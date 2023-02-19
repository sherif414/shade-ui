<script setup lang="ts">
import { useToast } from './composables/toast'
import { Button } from './components/button'
import { Select } from './components/select'
import { Input } from './components/input'
import { ref } from 'vue'
import IconUser from './components/icons/IconUser.vue'

const options: { label: string; value: string }[] = []

for (let i = 0; i < 10; i++) {
  options.push({
    label: 'option ' + i,
    value: `${i}`,
  })
}
const bool = ref(true)
const v = ref('')
function timeout() {
  bool.value = true
  setTimeout(() => {
    bool.value = false
  }, 2000)
}
</script>

<template>
  <main class="grid gap-4 place-items-center bg-light-1 min-h-screen font-sans">
    <form @submit.prevent="" class="gap-4 rounded-3 p-4 pt-6 gap-8 w-300px">
      <Select v-model="v" :options="options" label="select" />
    </form>
  </main>
</template>

<style>
body {
  background: white;
}

* {
  box-sizing: border-box;
}
</style>
