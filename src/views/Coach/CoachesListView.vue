<template>
  <section>
    <coach-filter @change-filter="handleChangeFilter"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :rate="coach.hourlyRate"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No coach!</h3>
    </base-card>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { CoachItem, CoachFilter } from "@/components";

const store = useStore();

onMounted(() => {
  store.dispatch("coaches/setCoachesAction");
});

let filters = ref<string[]>([]);

const filteredCoaches = computed(() => {
  const coaches = store.getters["coaches/coaches"];
  return coaches.filter((coach: any) => {
    for (let filter of filters.value) {
      if (!coach.areas.includes(filter)) return false;
    }
    return true;
  });
});

const hasCoaches = computed(() => {
  return store.getters["coaches/hasCoaches"];
});

const handleChangeFilter = (updatedFilters: string[]) => {
  filters.value = updatedFilters;
};
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
}
</style>
