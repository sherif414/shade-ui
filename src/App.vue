<script setup lang="ts">
import { useToast } from './composables/toast'
import { Button } from './components/button'
import { Select } from './components/select'
import { Input } from './components/input'
import { ref } from 'vue'
import IconUser from './components/icons/IconUser.vue'

const options: { label: string; value: string; disabled?: boolean }[] = []

for (let i = 0; i < 7; i++) {
  options.push({
    label: 'option ' + i,
    value: `${i}`,
    disabled: i === 1,
  })
}
const bool = ref(false)
const v = ref()

function handleClick(option: any) {
  v.value = option
}
</script>

<template>
  <main class="grid gap-4 place-items-center bg-light-1 min-h-screen font-sans">
    <form @submit.prevent="" class="gap-4 rounded-3 p-4 pt-6 gap-8 w-300px column">
      <Select v-model="v" :options="options" label="select">
        <template #icon>
          <IconUser />
        </template>
      </Select>
      <Input :readonly="bool" label="username" />
      <Button :disabled="bool" variant="filled">save</Button>
      <Button :disabled="bool" variant="text">save</Button>
      <Button :disabled="bool" variant="outline">save</Button>
      <Button icon-only @click="bool = !bool"><IconUser /></Button>
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
