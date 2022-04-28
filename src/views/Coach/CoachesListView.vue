<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <coach-item
        v-for="coach in coaches"
        :key="coach.id"
        :id="coach.id"
        :rate="coach.hourlyRate"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :areas="coach.areas"
      ></coach-item>
    </ul>
    <h3 v-else>No coach!</h3>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { CoachItem } from "@/components";

const store = useStore();

const coaches = computed(() => {
  return store.getters["coaches/coaches"];
});

const hasCoaches = computed(() => {
  return store.getters["coaches/hasCoaches"];
});
</script>
