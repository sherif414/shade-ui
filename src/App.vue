<script setup lang="ts">
const options = [
  {
    label: 'option 1',
    value: '1',
    checked: false,
  },
  {
    label: 'option 2',
    value: '2',
    checked: false,
  },
  {
    label: 'option 3',
    value: '3',
    checked: false,
  },
  {
    label: 'option 4',
    value: '4',
    checked: false,
  },
]

const v = ref<string[]>([])
const loading = ref(false)
</script>

<template>
  <main class="grid gap-4 place-items-center bg-light-1 min-h-screen">
    <form @submit.prevent="" class="flex flex-col rounded-3 p-4 pt-6 gap-8 max-w-300px">
      {{ v }}
      <SInput label="username" />
      <SSelect multiple v-model="v" :options="options" label="select" />
      <div class="row gap-2">
        <SInput type="number" min="1" max="12" label="day" />
        -<SInput type="number" min="1" max="12" label="month" />-
        <SInput type="number" min="1" max="12" label="year" />
      </div>
      <div class="gap-4 fcc justify-between">
        <SButton variant="text">button</SButton>
        <SButton disabled :loading="loading" variant="text">
          <template #icon>
            <IconUser />
          </template>
        </SButton>
        <SButton disabled :loading="loading" variant="default">
          <template #icon>
            <IconUser />
          </template>
        </SButton>
        <SButton @click="loading = !loading">button</SButton>
      </div>
    </form>
  </main>
</template>

<style>
body {
  background: white;
}
</style>
