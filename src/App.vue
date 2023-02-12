<script setup lang="ts">
const options = []

for (let i = 0; i < 1000; i++) {
  options.push({
    label: 'option ' + i,
    value: `${i}`,
  })
}

const v = ref()
const loading = ref(false)
</script>

<template>
  <main class="grid gap-4 place-items-center bg-light-1 min-h-screen">
    <form @submit.prevent="" class="flex flex-col rounded-3 p-4 pt-6 gap-8 max-w-300px">
      {{ v }}
      <SInput label="username" />
      <SSelect v-model="v" :options="options" label="select" />
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
