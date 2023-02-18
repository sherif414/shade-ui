<script setup lang="ts">
import { useToast } from './composables/toast'
import { SButton } from './components/button'
import { ref } from 'vue'
import SInput from './components/input/input.vue'
import IconUser from './components/icons/IconUser.vue'

const options: { label: string; value: string }[] = []

for (let i = 0; i < 10; i++) {
  options.push({
    label: 'option ' + i,
    value: `${i}`,
  })
}
const bool = ref(true)
const v = ref('value')
function timeout() {
  bool.value = true
  setTimeout(() => {
    bool.value = false
  }, 2000)
}
</script>

<template>
  <main class="grid gap-4 place-items-center bg-light-1 min-h-screen font-sans">
    <form @submit.prevent="" class="column gap-4 rounded-3 p-4 pt-6 gap-8 max-w-300px">
      {{ v }}
      <SInput v-model="v" :readonly="bool" hint="this is a hint" label="username"> </SInput>
      <SButton variant="text" size="sm" :loading="bool" @click="timeout">button</SButton>
      <SButton :loading="bool" @click="timeout">button</SButton>
      <SButton size="lg" :loading="true" @click="timeout">button</SButton>
      <SButton :loading="bool" @click="timeout"
        ><template #iconAppend> <IconUser /> </template
      ></SButton>
      <SButton :loading="bool" @click="timeout"
        ><template #iconPrepend> <IconUser /> </template
      ></SButton>
    </form>
  </main>
</template>

<style>
body {
  background: white;
}
</style>
