<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps<{ title: string; type: string }>();

const text = computed(() => {
  return props.title.toUpperCase();
});
</script>

<style scoped>
.badge {
  background: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #3d008d;
  color: white;
}

.backend {
  background-color: #71008d;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
}
</style>
