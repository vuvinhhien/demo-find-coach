<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  margin: 2rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  max-width: 40rem;
}
</style>
