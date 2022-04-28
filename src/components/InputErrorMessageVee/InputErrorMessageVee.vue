<template>
  <div class="error-message" v-if="props.errorMessage">
    {{ props.errorMessage }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
interface Props {
  errorMessage: string | undefined;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.error-message {
  color: red;
}
</style>
