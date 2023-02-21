<script setup lang="ts">
import { useToast } from './composables/toast'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/solid'
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
  <main class="grid gap-4 place-items-center py-8 min-h-screen font-sans">
    <form @submit.prevent="" class="gap-4 rounded-3 p-4 pt-6 gap-8 w-300px column">
      <Input size="sm" :disabled="bool" hint="hint" label="username" />
      <Input size="sm" :disabled="bool" hint="hint" label="username" :icon-prepend="IconUser" />
      <Input size="md" :disabled="bool" hint="hint" label="username" />
      <Input size="md" :disabled="bool" hint="hint" label="username" :icon-prepend="IconUser" />
      <Input size="lg" :disabled="bool" hint="hint" label="username" />
      <Input size="lg" :disabled="bool" hint="hint" label="username" :icon-prepend="IconUser" />

      <!-- <Select v-model="v" :options="options" label="select" :icon="ArrowLeftIcon" />
      <Select v-model="v" :options="options" label="select" />
      <Button size="sm" :disabled="bool" variant="text">save</Button> -->

      <!-- <Button size="md" :disabled="bool" variant="text">save</Button>
      <Button size="lg" :disabled="bool" variant="text">save</Button>
      <Button size="sm" :disabled="bool" variant="outline">save</Button>
      <Button size="md" :disabled="bool" variant="outline">save</Button>
      <Button size="lg" :disabled="bool" variant="outline">save</Button>
      <Button size="sm" :disabled="bool" variant="filled">save</Button>
      <Button size="md" :disabled="bool" variant="filled">save</Button>
      <Button size="lg" :disabled="bool" variant="filled">save</Button>
      <Button size="sm" @click="bool = !bool">save<ArrowRightIcon class="w-3 h-3" /></Button>
      <Button size="md" @click="bool = !bool">save<ArrowRightIcon class="w-3 h-3" /></Button>
      <Button size="lg" @click="bool = !bool">save<ArrowRightIcon class="w-3 h-3" /></Button> -->
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
