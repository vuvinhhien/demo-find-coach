<template>
  <base-card
    ><h2>Find Your Coach</h2>
    <span class="filter-option">
      <input
        type="checkbox"
        id="frontend"
        value="frontend"
        v-model="filters"
        @change="changeFilterHandler"
      />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        id="backend"
        value="backend"
        v-model="filters"
        @change="changeFilterHandler"
      />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input
        type="checkbox"
        id="career"
        value="career"
        v-model="filters"
        @change="changeFilterHandler"
      />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script setup lang="ts">
import { defineEmits, ref } from "vue";

const filters = ref<string[]>([]);

const emit = defineEmits<{
  (e: "changeFilter", updatedFilters: string[]): void;
}>();

const changeFilterHandler = (event: Event) => {
  console.log(filters.value);
  emit("changeFilter", filters.value);
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}
.filter-option {
  margin-right: 1rem;
}
.filter-option label,
.filter-option input {
  vertical-align: middle;
}
.filter-option label {
  margin-left: 0.25rem;
}
.filter-option.active label {
  font-weight: bold;
}
</style>
