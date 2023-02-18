<template>
  <div class="loading h-4 w-4 before:animate-spin after:animate-spin" />
</template>

<style scoped>
.loading {
  position: relative;
  display: grid;
  place-items: center;
}

.loading::before,
.loading::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  border-color: transparent;
  border-top-color: currentColor;
  border-style: solid;
  border-radius: 100%;
  border-width: 2px;
}

.loading::after {
  animation-timing-function: ease;
}

.loading::before {
  border-style: dashed;
  opacity: 50%;
}
</style>
