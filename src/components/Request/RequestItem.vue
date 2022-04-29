<template>
  <li>
    <div>
      <a :href="emailLink">{{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { defineProps } from "vue";

const props = defineProps<{ email: string; message: string }>();

const emailLink = computed(() => {
  return "mailto:" + props.email;
});
</script>

<style lang="scss" scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;

  &:active,
  &:hover {
    color: #8d007a;
  }
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
